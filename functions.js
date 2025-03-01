
var client = new dblurt.Client(
    [
        "https://rpc.beblurt.com",
        "https://rpc.blurt.world",
        "https://blurt-rpc.saboin.com",
        "https://rpc.blurt.one",
    ],
    { timeout: 1500 }
);

async function runThisJS(jsCode, id) {
    try {
        const response = await Promise.race([eval(jsCode), timeOutPromise()]);
        return replyToNative({
            data: response,
            valid: true,
            error: "",
        }, id);
    } catch (e) {
        return replyToNative({
            data: null,
            valid: false,
            error: e.message,
        }, id);
    }
}

async function loginWithKeychain(id, username) {
    const challenge = { auth: "login", user: username };
    const buf = JSON.stringify(challenge, null, 0);
    return new Promise((resolve) => {
        try {
            window.blurt_keychain.requestSignBuffer(
                username,
                buf,
                "Posting",
                (response) => {
                    if (response.success === true) {
                        return resolve(replyToNative({
                            valid: true,
                            data: true,
                            error: null,
                        }));
                    } else {
                        return resolve(createErrorResponse(response));
                    }
                }
            );
        } catch (error) {
            return resolve(createErrorResponse(error));
        }
    });
}

async function performOperationsViaPrivatekey(operations, key) {
    try {
        let operationList = JSON.parse(decodeURIComponent(escape(atob(operations))));
        const pkey = dblurt.PrivateKey.fromString(key);
        const result = client.broadcast.sendOperations(operationList, pkey);
        return replyToNative({
            valid: true,
            data: true,
            error: null,
        });
    } catch (error) {
        return createErrorResponse(error);
    }
}

async function performOperationsViaKeyChainWeb(
    operations,
    username,
) {
    let operationList = JSON.parse(decodeURIComponent(escape(atob(operations))));
    return new Promise((resolve) => {
        try {
            const keychain = window.blurt_keychain;
            keychain.requestBroadcast(
                username,
                operationList,
                "Posting",
                (response) => {
                    if (response.success === true) {
                        return resolve(replyToNative({
                            valid: true,
                            data: true,
                            error: null,
                        }));
                    } else {
                        return resolve(createErrorResponse(response));
                    }
                }
            );
        } catch (error) {
            return resolve(createErrorResponse(error));
        }
    });
}

async function validateKey(id, accountName, postingKey) {
    return new Promise(function (resolve, reject) {
        blurt.api.getAccounts([accountName], function (err, accounts) {
            if (err) {
                return resolve(createErrorResponse(err));
            } else {
                if (
                    !(
                        accounts.length > 0 &&
                        accounts[0]["posting"] !== undefined &&
                        accounts[0]["posting"]["key_auths"] !== undefined &&
                        accounts[0]["posting"]["key_auths"].length > 0 &&
                        accounts[0]["posting"]["key_auths"][0].length > 0
                    )
                ) {
                    return resolve(createErrorResponse(null, "username not found or invalid response from server"));
                }
                const pubWif = accounts[0].posting.key_auths[0][0];
                try {
                    const isValid = blurt.auth.wifIsValid(postingKey, pubWif);
                    return resolve(replyToNative({
                        valid: true,
                        data: isValid,
                        error: null,
                    }));
                } catch (err) {
                    return resolve(createErrorResponse(err));
                }
            }
        });
    });
}

async function pickImageAndUpload(accountName) {
    return new Promise(function (resolve, reject) {
        var input = document.createElement("input");
        input.type = "file";
        input.onchange = (e) => {
            var file = e.target.files[0];
            var reader = new FileReader();
            reader.readAsBinaryString(file);
            reader.onload = async () => {
                const content = window.Buffer.from(reader.result, "binary");
                const prefix = window.Buffer.from("ImageSigningChallenge");
                const buf = window.Buffer.concat([prefix, content]);
                window.blurt_keychain.requestSignBuffer(
                    accountName,
                    JSON.stringify(buf),
                    "Posting",
                    (response) => {
                        const url =
                            `https://img-upload.blurt.world/` +
                            accountName +
                            "/" +
                            response.result;
                        const formData = new FormData();
                        formData.append("file", file, file.name);
                        axios
                            .post(url, formData)
                            .then((response) => {
                                console.log(response.data.url);
                                return resolve(replyToNative({
                                    valid: true,
                                    data: response.data.url,
                                    error: ""
                                }));
                            })
                            .catch((error) => {
                                console.log(error.message);
                                return resolve(createErrorResponse(error));
                            });
                    }
                );

            };
        };
        input.oncancel = (e) => {
            return resolve(replyToNative({
                valid: false,
                data: null,
                error: "Image selection cancelled by user"
            }));
        }
        input.click();
    });
}

function createErrorResponse(response, error) {
    return replyToNative({
        valid: false,
        data: null,
        error: error ?? (response.message || "Unknown error occurred.")
    });
}


function timeOutPromise(timeout = 15000) {
    return new Promise((_, reject) => {
        setTimeout(() => reject(new Error("Server timed out")), timeout);
    });
}

function replyToNative(result, id, stringifyResult = true) {
    if (stringifyResult) {
        return JSON.stringify(result);
    } else {
        return result;
    }
}
