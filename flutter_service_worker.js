'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "def5a106dc9aca6a9bad782fb08a0fa8",
"version.json": "cd917f58134fdfa83cbd6666371fddee",
"index.html": "5bac35ff3d843e7f32cb07d7010fc04d",
"/": "5bac35ff3d843e7f32cb07d7010fc04d",
"main.dart.js": "6175f020b41a6a3bdfa5e56f35d1d0d9",
"functions.js": "6ec4bb87f7b7474be69c7da011b7955c",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "36520b0907a5e188d2ce484bca4c023d",
"blurt-ecc.js": "bf7197196cf6b37db1016e530c12196f",
"icons/Icon-192.png": "fc80fbbc6c0bbc6efc41fa049bec7ffd",
"icons/Icon-maskable-192.png": "fc80fbbc6c0bbc6efc41fa049bec7ffd",
"icons/Icon-maskable-512.png": "b97f758507ac097e31603629380d90e3",
"icons/Icon-512.png": "b97f758507ac097e31603629380d90e3",
"manifest.json": "315e72ea320a3a555cc3182c72ac2240",
".git/config": "88fbd47ba9c1cc5b01401e5e5a3af285",
".git/objects/32/0070de394cac37f29c870fb1aa22ed483468c3": "dafe26f8c0e73bf8d7622f8cb3bec664",
".git/objects/67/bccc80b13fa5d1b8d4fddd9dff022e6c7a5c78": "c26d2f5ca4d824924fe1935f31891347",
".git/objects/93/7b1e9b4971410e09c5b8e0a5d7be760a11212d": "8d08e988fd9b8de3d8ce8a3d694a8ce3",
".git/objects/0e/eebd545e189db33723ddd8a98ff8745cc777d0": "01c8875289101aacc244aef14d94e5c6",
".git/objects/5f/2101167c6e8f64155c5e28456e020d76100a0b": "849f5313df450808c9251a196bcc4232",
".git/objects/33/776d5384fa9d3a1b7817c32263941f9d76efa2": "508b89a012c8bd50695ed5c08dec4e0b",
".git/objects/9d/46a53652c467fcc9e46a1d41231cecd46e4aa0": "68419a64f9a8ee9681dec7040c7d438c",
".git/objects/d9/97c020799258a8546bd4b0ee577d555d14574b": "136b811dc7ad3a485e2600e532f7804b",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/bb/88c03426c1fb75a503d7339baa4fe009dc1d5e": "59ef71714d92002ddd09c764e767527e",
".git/objects/d6/a1350a119d9b78d1abbcf0d98f6984bf5ab1a6": "45ab5a8e845e3609c1849f6cfb74073b",
".git/objects/f3/0ef0bcdb0dc863b956feedff7f9640c768c00e": "7635af210ab900d2f781fccf8cae9ccc",
".git/objects/c7/09804ac30c455ce3512e36ab6c9402e75d065d": "527d16b6007e69190853bba0427bb54c",
".git/objects/c9/324899e7e286cbf9b04671c895045c980ef3b8": "23669e38c79a679427516a9a6c4eaea9",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/e4/8144efaf4f3e8d2b3899c0127f26640bcc8e9b": "e5b1aa35a0a0ca7bd7935fe5a29f0e34",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/7c/f466ce9bdb75bec02e30f6c8067e0a5959d4b9": "b5f0461aea38347c0b15b1d3d785ee7d",
".git/objects/16/451ea31ccaf3901bd70092a78ba1ade1fd214e": "1f49b494bda46a71ca7fef1c6d284406",
".git/objects/89/b46e7b8d40b8eedb4363aede515c64929c8f2d": "e7baf8e814370c0964d9b9b16355704b",
".git/objects/1f/06cbc2faa9348ca383f656a22cdc0d0621a713": "e09ad902ea0eedbb90908c19f5cd0a18",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/28/0479a55ae2f309df8a6d7ca5f514158a437d19": "a9bc22927030129c4a7ff569e9ffc9fe",
".git/objects/26/60528e589b9b7d4edb42067906e0028ba369a2": "5541920052dd4e27a6386707c2d1bebc",
".git/objects/44/eaa87cb52f179cf412b022d08ddfb4549acb6d": "cbe8911bd344b052122538c6a22dc2f8",
".git/objects/44/abe5c5379c877b3c12238d384dfdbe0da78273": "d5b481863a3103ec77f1e3755cac2f7b",
".git/objects/2f/c7d3e3cd72c05d1112135215a47858e60eee4e": "d62a0e5d257ba244754fe014794a5c28",
".git/objects/91/5e53570b6eff687568d02d054ba431241aaaf4": "63dc15de611201c9f08e0b578a6d0e9e",
".git/objects/96/704964b02ee1ed1661fdaf4703769ec2ce1588": "a6e18b84e3e3874747b20f6784c355d2",
".git/objects/54/4e1a5283e51c401db96b02b85e00709ae6c062": "ac920b781591e489816157b2194204a1",
".git/objects/5b/205c91f970f1b8ed3b6befc051bf0f9625f532": "2d0532ccb421a5c82bf896938ccb3ba8",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/01/f171fc50391b84d0294630fddff7fecb71e180": "5360187c03631f71a340613d21a948fb",
".git/objects/52/cbafc5f835f7072e4c916a0f02f9c87e8a9c38": "2935180dc423cec9041f06ebb450479b",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b8/f5b061fff300636ad483ba976fb07cce91904a": "70ea3f1c91e9ef23b75d4b582a928b5f",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/d2/cedc3e244a60de1c3fea109f24a175ba13b9e5": "f44d339f49cf6aaf6119d94de2ea5883",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/f9/79e8bed55a6eda4f7dba98eeb4ce6297f4f837": "3c223dd20ff3268fb1efd92228a9dd73",
".git/objects/e9/23eae9c082871d6e40884abfdf0e744185e627": "b1d9302448c9aeebe06efb37f15e29de",
".git/objects/ce/c925d4f24ab5506743bc8d3a9d02e360ddc0bf": "137ffdfb6a01689256bbe9cd3fc139a3",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/84/21552499a7efa1a504ac6c8fb04710b0ae01b2": "27a30e3e7ae62017bb6be83d826804ac",
".git/objects/24/7cfdc4109d5295b8f5ab122cf9ee8d5dfa5271": "27abc38b16fda32567a68132c59fe89f",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/71/c67008a4920dbe10e8241b128fd6a373981427": "1784d4eac3b3a9ecc41c2162207b5d5c",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/14/17bfec2af42b551ced1638022d39023ea140d5": "e1916844cc6124493becd52459e06fe4",
".git/objects/25/b3db54f3efbae7629c0e54ef80b042095a86c7": "24a06bea7d2fa4206232f0952e22845c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dd24d027c3234cea9ad141ea2db5d660",
".git/logs/refs/heads/main": "dd24d027c3234cea9ad141ea2db5d660",
".git/logs/refs/remotes/origin/main": "0d0cef5fe986cfcd65ac9ad0ffc8bc3f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "08abea9f31602ddcd10b6cfbbb4e7d1b",
".git/refs/remotes/origin/main": "08abea9f31602ddcd10b6cfbbb4e7d1b",
".git/index": "38d43259343c1e3bc1397625351b67f4",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "9916860d77bc73dd3193f4d673c170c4",
"assets/NOTICES": "4df1ea0963548df9e9daa65789fb7786",
"assets/FontManifest.json": "f96929f2c90632cdf69ae10a3f79de45",
"assets/AssetManifest.bin.json": "a75e69874fc66d022d0e3abe0932101e",
"assets/packages/giphy_picker/assets/PoweredBy_200px-Black_HorizText.png": "439da1ed3ca70fb090eb98698485c21e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "be04b3f74e80bda12a64f9a08a7cd1df",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/logo.png": "ea9556fc2e2dc0de572a0c6ebe53bfb0",
"assets/assets/fonts/poppins/Poppins-ExtraLight.ttf": "a0f2eadb0002101ea5da28381ce16cde",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "1bb10326b972c92be6c59c048a4327e4",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "614a91afc751f09d049231f828801c20",
"assets/assets/fonts/poppins/Poppins-ExtraBold.ttf": "4252dae8574e434c7bb0127b8ffd06df",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "cd6b896a19b4babd1a2fa07498e9fc47",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "124cd57d8f41f6db22a724f882dca3f4",
"assets/assets/fonts/poppins/Poppins-Black.ttf": "9a3a3c0803219892727ed9d85ad5caea",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "0fc985df77c6b59d37e79b97ed7fb744",
"assets/assets/fonts/poppins/Poppins-Italic.ttf": "07502c4fe46025097dd8b1e331182ee0",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
