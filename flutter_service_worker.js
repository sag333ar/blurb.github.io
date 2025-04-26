'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "bf174fc3a8e8418ada86670ca14702a8",
"version.json": "cd917f58134fdfa83cbd6666371fddee",
"index.html": "275b410232c0c53dd1ba9013efe3856a",
"/": "275b410232c0c53dd1ba9013efe3856a",
"CNAME": "d2b878d6c48a4dea991bbacf5928a5c1",
"main.dart.js": "9dbe95e9438617d2ef2adbdfb65a7606",
"functions.js": "6ec4bb87f7b7474be69c7da011b7955c",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "36520b0907a5e188d2ce484bca4c023d",
"blurt-ecc.js": "bf7197196cf6b37db1016e530c12196f",
"icons/Icon-192.png": "fc80fbbc6c0bbc6efc41fa049bec7ffd",
"icons/Icon-maskable-192.png": "fc80fbbc6c0bbc6efc41fa049bec7ffd",
"icons/Icon-maskable-512.png": "b97f758507ac097e31603629380d90e3",
"icons/Icon-512.png": "b97f758507ac097e31603629380d90e3",
"manifest.json": "315e72ea320a3a555cc3182c72ac2240",
".git/ORIG_HEAD": "8bc66dd0ff828c020e2bd6e4d24ad0f8",
".git/config": "dd207e27d4b7b4829d3f21ff585fde05",
".git/objects/50/7c96523dfe569a5b1f406fbd2bb8a9d7b82096": "51d8598eef533e7477abe31f6206c12b",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/32/d9f0e47a5e480c856ee680df9bd85c11d21062": "582e264e89026a378e862b056a1eb804",
".git/objects/3c/664dc7bfde4f889e82442c71b2e93aea2d4328": "5e84063ed7e85d331f476105e9f95c84",
".git/objects/3c/ddf31c8f6efa4f8bf433aa27656f4e1da00e06": "8764738d87b028ae515b40f0ab50200d",
".git/objects/93/60dcc35aad86594ae5f5d9886441e785d1e6fd": "c2cac7c6a7311867ca1c275c553c34e5",
".git/objects/9c/54bcc1046abab200bee3746f4959eba27d2e1f": "f872f304879d62d92ee27d5dd79ea111",
".git/objects/a4/e907a6a8a930e2148350136629f1555e00e4f0": "b94cfe332a51e59f247f6bfd566d42ac",
".git/objects/b5/bbbca9cc55f67f51f9e49c31378f6881495875": "aa9efe867bbae2ed54d7fc10fa728c04",
".git/objects/b4/700708912e9c8f2ae4a227780018abe5282a46": "0a88509d6a7400414beaf25b1077e4d5",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/eb/5e4f2f4b314ad9faeec5eb39f50d1720e6fd44": "68d4c8bb9a4c08cdd935696304cc0269",
".git/objects/ee/9c8ffe84ed1db145471d0868ca9f121dc7ed92": "3e683eb59dc98465ab7b035973c08fa3",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/c8/9f3e348072d71092fc193325296ffb15a68c39": "2e81c3a932c7c2322082de3421771228",
".git/objects/c8/0c96a1c7704e1835944013bd0e3a2f9f2fcee2": "9ce39b4681cb0f790f860d723c84cc1a",
".git/objects/c6/c3c23a3faf0eeecfaaa814d60b9c5dcbd85d2f": "12b2342d4c197102495e58e5db76e6da",
".git/objects/18/94a58811ffdac2246c979dffa58356ef977d9a": "b91f56f701a0fbe3137ceac162909982",
".git/objects/pack/pack-52a92673a6291dbf68216dd6cc5cbafaeb494db6.idx": "68bd708fe3122d06354295fc36181ed6",
".git/objects/pack/pack-52a92673a6291dbf68216dd6cc5cbafaeb494db6.pack": "5aa9156cd15a282bfd97f4f115b6a6d0",
".git/objects/16/4b2cfdbe0912784df73d3e5108a1dc6b79ddd0": "9fb03dd6e6ad4c394577ebe311143579",
".git/objects/21/b9bd15eafe9aa6de337d431016763f73730514": "04649b36ff9df9355819bbd0ad9f98f7",
".git/objects/72/6206d3ca1d499e69869df11156a2b4d94c983e": "2c4ad07d785c73fd322824ec1f7818d4",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/91/22bd0c722cb0dd42e46bf3458499e1e41a38d8": "c3657eb98e93e5bef513ddade9e1922b",
".git/objects/96/595d8abc9ea9efa4a8494f475aa4ec66571592": "b4678b9cbd0bdaacb682c9c8ac1d23c3",
".git/objects/96/dd04082000cda7a3448040ed41764478fef280": "7cd612257beffdf98f6c90bd033f2438",
".git/objects/6c/f9272eddb92fe4b235f10ad8a190cc290d497a": "da4b68257dee928b5f2514cea83a047c",
".git/objects/99/72e946b3702f32deeadd92ea9ba983ea311a89": "f8fa5adabf1e03cc573debba48ea2d9c",
".git/objects/99/ded2849e4b2cf572b4f65d74e3d27c8c47602e": "a64a77be8c7e898caeef05c86d518663",
".git/objects/b8/0a2f09d7ff1435e40582643319d3da02c23162": "be215106c6a3c2b269bc5f3c8c0e3d67",
".git/objects/dd/778f5be3f47ac47f1e4d3e08b3e7557a116ce3": "f115836c293ddbb0072e2e5964c0c3c7",
".git/objects/af/474a31e2bacbe35b49b1720a093e22f0010bb5": "dac738ed82e780341ddb2ea1690b41ad",
".git/objects/a6/3ac86511761cb5904f371e63ab8f96e31a1283": "5f8a21fafe93f99b39756828ce31d03d",
".git/objects/cd/8b236086ade238b08066c3d551cb5764607285": "439aa0e7985aaedec726caaba9045a0c",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/77/7e810d8da102b68c2b2bbc59a4320df9fe3f65": "7f58b9652c0bb0d1062924d17168d098",
".git/objects/84/1c6259086fa435d8adbed129e7e9e422b0af35": "bc9d3e0bf3cc8123a3b8c8826266d87b",
".git/objects/24/b77a5b90d3bc36f7a454f6271ae097d28d5984": "fcf5ea5caa008cd94e1717bec0886e8a",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/1c/b091747f05a3fe8631e6e9d2fab4d221587d69": "c551384d145799cb3c84ac86783ebb5f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5a58128ebc19967eb56d276f7b4404e5",
".git/logs/refs/heads/main": "5a58128ebc19967eb56d276f7b4404e5",
".git/logs/refs/remotes/origin/HEAD": "9080eb418de5eabc595c8a17f3dc5206",
".git/logs/refs/remotes/origin/main": "a293c469028cfb9cd5eeb33a47aa4d3d",
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
".git/refs/heads/main": "79d01eb0badb4296eed4cb7cedf0a80c",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "d23024740c3b184ebff2bda12b38f301",
".git/index": "a97577e1cb35fa7324ea639300364b72",
".git/packed-refs": "540a44fc1351c1ec63d2ffb2070fb33f",
".git/COMMIT_EDITMSG": "9d3ecef04df5224b052187af3b3a1f6b",
".git/FETCH_HEAD": "5c06f7bf3494d8eb5079ffe9d472e828",
"assets/AssetManifest.json": "9916860d77bc73dd3193f4d673c170c4",
"assets/NOTICES": "4df1ea0963548df9e9daa65789fb7786",
"assets/FontManifest.json": "f96929f2c90632cdf69ae10a3f79de45",
"assets/AssetManifest.bin.json": "a75e69874fc66d022d0e3abe0932101e",
"assets/packages/giphy_picker/assets/PoweredBy_200px-Black_HorizText.png": "439da1ed3ca70fb090eb98698485c21e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "be04b3f74e80bda12a64f9a08a7cd1df",
"assets/fonts/MaterialIcons-Regular.otf": "87d469c80ed6f6af068a2eb9f6930323",
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
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
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
