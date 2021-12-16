'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "b10de537c9cb103acf0a9884acc36f49",
"assets/assets/images/circulate.svg": "b22a376a502df7acf3f52a9c901d6e17",
"assets/assets/images/circulate_one.svg": "17cedc356abe80a284fedb5e96e8f669",
"assets/assets/images/circulate_random.svg": "3de768e33e483062b2fa34a3dfeeace0",
"assets/assets/images/comment_num.svg": "7a814f136b2ff6e02a3be6cf3b140c85",
"assets/assets/images/cover-bg-in.png": "aa13f1c1f54808584ee3aaaa7477ceb2",
"assets/assets/images/img_user_head.png": "0cf719c17c25d8f604672ce4ccbf7d7f",
"assets/assets/images/loading.gif": "03d153a07d50261d06f690f829320060",
"assets/assets/images/loading.png": "b5079f33bd7a1edf602089f50415d114",
"assets/assets/images/mieba.png": "6267a5611a9417abf6fae454e529e3cf",
"assets/assets/images/needle.png": "e5e615d8a23e2a8cb56ed6de71d62bae",
"assets/assets/images/playAll.svg": "d687ec7f05b67f8d71514de510d7a425",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "5bc40ff75a09ccdd05f67a89b2f309d6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "3cff2e60349007124db93de2150052e8",
"/": "3cff2e60349007124db93de2150052e8",
"main.dart.js": "4483c2c911404632cb06494b6cb2add1",
"main.dart.js_1.part.js": "e18f74190bf8743e25d34fd609e735e2",
"main.dart.js_10.part.js": "776443ab02cf0a393708bb84e31d448e",
"main.dart.js_11.part.js": "40ff60af5fa23b17c800f94f9f2dbbcb",
"main.dart.js_12.part.js": "845a57adfce2c7def239bd40ae4595a6",
"main.dart.js_13.part.js": "a0be42c0c0b7e869082515c7211975a3",
"main.dart.js_14.part.js": "1e0d2ce34a0c4f7d6724735160778f9f",
"main.dart.js_15.part.js": "3fee8c5f770bb30470903ae8daa09e79",
"main.dart.js_16.part.js": "2716e88ceda46acf605413c0ce354e66",
"main.dart.js_17.part.js": "bffbfb2b89fd66fa78b619f37c1afc56",
"main.dart.js_18.part.js": "5eb15381085c52db46895954a3ffa8e5",
"main.dart.js_19.part.js": "fa96016cb72e8a6451a76ae6d2379cc6",
"main.dart.js_2.part.js": "15b3f47848d7d394d7e58af9b7f002bb",
"main.dart.js_20.part.js": "fa46d65e580b4e7de12720018dd2ccba",
"main.dart.js_21.part.js": "2b6ffb0bb7f79a3428261a3e62220bbf",
"main.dart.js_22.part.js": "374933823cba2b21c4ea6107dad04466",
"main.dart.js_23.part.js": "b4b034eb34b71cf673c2a0c0a68a7c99",
"main.dart.js_24.part.js": "77fc817043c0d4094ef376d23c4ace1a",
"main.dart.js_25.part.js": "0dffca6b405cc347132a6d43ad6464ee",
"main.dart.js_26.part.js": "1ec3e00826d9de7e82e56757d22a7292",
"main.dart.js_27.part.js": "1c675ab51cbc233aed35a2d904aa1c38",
"main.dart.js_28.part.js": "6c23158a31224a0e8118ce03bea839eb",
"main.dart.js_29.part.js": "7e2d94fe3dfbe368478422a0bbefc878",
"main.dart.js_3.part.js": "098438ec28d368fef22bed990a889b80",
"main.dart.js_30.part.js": "261321495bd63bab6f3a5882444d47e5",
"main.dart.js_31.part.js": "f3e3ebde2aaba156ba7f4d83aec70a5f",
"main.dart.js_32.part.js": "d7bfcada07833b16bee97babb19c69dc",
"main.dart.js_33.part.js": "da86649130e3c50d58f3a531fd1726c5",
"main.dart.js_34.part.js": "0d3b255db35485569ca9a0580a991d05",
"main.dart.js_35.part.js": "bfc86c431d0fae4190fec2b36004652c",
"main.dart.js_36.part.js": "2b4300ce63b12c7febef948edaf601e6",
"main.dart.js_37.part.js": "638d35fd72e120bac0eae356a34345bb",
"main.dart.js_38.part.js": "830d0f2e12aa6354a169669c84890fe4",
"main.dart.js_39.part.js": "3a346d0044019ed46aaf048e7fdebf58",
"main.dart.js_4.part.js": "d04236e14b62955b66bc35d75f5cbbc0",
"main.dart.js_41.part.js": "f15c8913391d74a70845014a947f171b",
"main.dart.js_43.part.js": "dbe7912f2967bdbc01e88df556a43684",
"main.dart.js_44.part.js": "e44910d85f9c58d8d515dc2fef5737c9",
"main.dart.js_45.part.js": "dd2a83803a75b7c38b4353b34c0e511a",
"main.dart.js_46.part.js": "fbe9bbc404b324ca1525fb01e76e7ac2",
"main.dart.js_47.part.js": "677a4b59275ef3c1e6fdc4ba842f41c6",
"main.dart.js_48.part.js": "aac10a07162307d335f802dcf5b37980",
"main.dart.js_5.part.js": "c57d3fc1f9362812d8f0cd552c06018e",
"main.dart.js_50.part.js": "f599aecc0ae46557e223c59cbefc5546",
"main.dart.js_51.part.js": "b9ee03ae7ac0d6674b7ca534bfb6f6b1",
"main.dart.js_52.part.js": "8ca954b86d89aa7f956dde6b46980deb",
"main.dart.js_54.part.js": "11cb6584055cfce3e538b8dedcf6f800",
"main.dart.js_55.part.js": "c4133995d37bf9d243842c0d5ef1449e",
"main.dart.js_56.part.js": "2ea8af549206be6013264db5b992d798",
"main.dart.js_57.part.js": "64d0529c8a0e93434a451ff3f98b22f1",
"main.dart.js_6.part.js": "04c9d65b8b262f086513f6d315c0ecaa",
"main.dart.js_7.part.js": "0d7e6904558de46d92918b061a5de53f",
"main.dart.js_8.part.js": "1b804c6eb9ac0f341f96283d7d439a62",
"main.dart.js_9.part.js": "b7474b9376de43f04ce39fa66e569e5a",
"manifest.json": "5aa66876af381f11d4f82f95d37bb1e3",
"version.json": "3bcf2a821ff67896c82b32d9f82ef47f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
