'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "bf13a20365cc7fdfe298152604eb6e37",
"assets/assets/images/loading.png": "b5079f33bd7a1edf602089f50415d114",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "b57ca7f116be1e9f90072f50ae9f9fa7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter_music/.git/COMMIT_EDITMSG": "b498d9dc360952838be3b78ae77bbc53",
"flutter_music/.git/config": "6e41cc1ca4c8b74cc48003800a83ed16",
"flutter_music/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"flutter_music/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"flutter_music/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"flutter_music/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"flutter_music/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"flutter_music/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"flutter_music/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"flutter_music/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"flutter_music/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"flutter_music/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"flutter_music/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"flutter_music/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"flutter_music/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"flutter_music/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"flutter_music/.git/index": "0c514d54ec5edea01e242f8dcb772fcb",
"flutter_music/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"flutter_music/.git/logs/HEAD": "30a143405d3918f90f70122c65f41ac4",
"flutter_music/.git/logs/refs/heads/main": "30a143405d3918f90f70122c65f41ac4",
"flutter_music/.git/logs/refs/remotes/origin/HEAD": "523493c25c16fb773dffe7f57d6f87e8",
"flutter_music/.git/logs/refs/remotes/origin/main": "271a5d9efc3766ace80594c94d24bed6",
"flutter_music/.git/objects/04/205db8e57bf492021f890f494e30cb5b094d72": "dd0c891bc73cc912f6f2b292ff02850c",
"flutter_music/.git/objects/0c/741cff2af2ca976cfb07022e95486defbec67f": "2164c90ec23f8df88506f11079a2c303",
"flutter_music/.git/objects/13/6821082c8cc53138b77ce21f803a45638dc669": "dde0be7e8c9cf296fd5a70ce4e4511e2",
"flutter_music/.git/objects/27/c78c08510a680683c1f09131c02047bd4b4e3e": "f5c2ea0dca3c28f104f16ec55ef99867",
"flutter_music/.git/objects/3c/0543e992f53bd23ce77b9f99840e842163e38f": "a2bad261e2aaa8b86cbd330de7e3fcf6",
"flutter_music/.git/objects/40/6425ab20b61d19c14bfbeebe994c2183bd028a": "6230359fc52c8a6ad62253e0f3947d88",
"flutter_music/.git/objects/48/7615f649f97132d0dbf6265cfb25ef203acc1c": "5dd8c50cb69bdaaceab94f8644434d00",
"flutter_music/.git/objects/4a/0c6002626624b28b7ed73e2ddd87f68e7294ef": "13c184dee0d43f9c868497312f2a91e6",
"flutter_music/.git/objects/61/111e987477e79da040e9fd64b32b58fb3c5456": "47cf879e0821121e91d37dcf3419f907",
"flutter_music/.git/objects/63/713fedf687dabbd72bd9216ebe560a591021ad": "0d975501be0b59b7a8a3790f3d8c0180",
"flutter_music/.git/objects/91/0004e473e4a589be899935b321e84ea3a293ce": "187f7371bd006b322f1a26c3c1bc52c8",
"flutter_music/.git/objects/94/c9d1f58244ff28f63f78dddee4439c92549c24": "7128f1fc0baa9e607670eea53402c7f3",
"flutter_music/.git/objects/9c/b6d3ff4c98522eef20e8e3fb451cc968ccf06b": "a8125a6cc60a18bf947b267ab23120ec",
"flutter_music/.git/objects/a4/c7fa5288c4b6694aeb2f684931f8cbd6c37eca": "d4e4b21b300d0c762c36d392c685bc2e",
"flutter_music/.git/objects/c3/f42589c7bbc2b097cba294aa607e582ea0cb40": "456d0e9674d0a84b8e263d2f8796fca5",
"flutter_music/.git/objects/c6/f55f394f3b9073e5f7c6d7a6c16de02327573b": "f9d7b28f79461deac9ab631f7cde945c",
"flutter_music/.git/objects/d6/a7c7e8dcc21a36433564fd641f7d3ec9efa147": "d518526f2b4aa4faed00d52200de0f2e",
"flutter_music/.git/objects/da/bb3c69dfa090c17388adb4b5f6150a634294f6": "6fd2a4566cbb241000101d90d1b870a4",
"flutter_music/.git/objects/e8/4cf465288a76f0a207e19737b33b808927af3a": "964d32bbf40e42af76d2ade6987598c3",
"flutter_music/.git/objects/f3/5cdc2f922c3bceb6a63f00e6a9095111b58400": "276ef8835d105b0afe2d7b2eff7b6363",
"flutter_music/.git/objects/fe/7cf90fb3ae0e87eb13cdbefcb0dde3e09f4efc": "7b7b6771f383d1fa50aee6153a065c50",
"flutter_music/.git/objects/pack/pack-25a869faa7fee32e794361f7a2367b13a3093dd2.idx": "f02eb1f42e4b677c4ab8cbd3dc5484c9",
"flutter_music/.git/objects/pack/pack-25a869faa7fee32e794361f7a2367b13a3093dd2.pack": "44575e8f843b0f1b7919e37dc06d477a",
"flutter_music/.git/packed-refs": "a78421464f5a20ff5d22544ba58ee761",
"flutter_music/.git/refs/heads/main": "df4cf91b2a6d5229a19e6972f372b25b",
"flutter_music/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"flutter_music/.git/refs/remotes/origin/main": "df4cf91b2a6d5229a19e6972f372b25b",
"flutter_music/assets/AssetManifest.json": "bf13a20365cc7fdfe298152604eb6e37",
"flutter_music/assets/assets/images/loading.png": "b5079f33bd7a1edf602089f50415d114",
"flutter_music/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"flutter_music/assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"flutter_music/assets/NOTICES": "b57ca7f116be1e9f90072f50ae9f9fa7",
"flutter_music/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"flutter_music/assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"flutter_music/assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"flutter_music/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter_music/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"flutter_music/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"flutter_music/index.html": "47265d1f7beed935abcb0e21f8c2c1f6",
"/": "f9f2f260392ae42f5431820189127311",
"flutter_music/main.dart.js": "413c737e0c1c4225e584fbea7804fa6f",
"flutter_music/manifest.json": "5aa66876af381f11d4f82f95d37bb1e3",
"flutter_music/README.md": "131f5f23e65e7e797b08444313d5f1ba",
"flutter_music/version.json": "53bf1e8de662d958f4b7721653a88dce",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "f9f2f260392ae42f5431820189127311",
"main.dart.js": "0ca64e23f2fc9494b70762a3809be4b5",
"manifest.json": "5aa66876af381f11d4f82f95d37bb1e3",
"version.json": "53bf1e8de662d958f4b7721653a88dce"
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
