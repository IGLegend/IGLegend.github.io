'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/hooks/applypatch-msg.sample": "4e33b997d7d5d5274c56bbf61f0c0bf9",
".git/hooks/commit-msg.sample": "89cb67435d2c1b9503e32d599d72713c",
".git/hooks/post-update.sample": "be48e56d8b9f9108aa4ecb32dd12d435",
".git/hooks/pre-applypatch.sample": "1f6a74774ee63312b4ad8a8c6ec7f2e8",
".git/hooks/pre-commit.sample": "3ba41bb5b6fe126be0c04c17ceb564ff",
".git/hooks/pre-merge-commit.sample": "f9d3ac247a941cf41ceb86048c699cfe",
".git/hooks/pre-push.sample": "a5a56d58c7133331b00b520ea5548074",
".git/hooks/pre-receive.sample": "c5e60ee055ef7b920a10b2871b1790a2",
".git/hooks/push-to-checkout.sample": "d8204d74ffd9ca215d1687eaca1e9e5b",
".git/hooks/update.sample": "edce28be0c66a0a19729dc76f8143916",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-rebase.sample": "0d4f0a0a63c6a1cbbf0a8b410b9e3c59",
".git/hooks/prepare-commit-msg.sample": "529551eb02ce07d5a84df03a8361e155",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/heads/master": "edd824981cd956d1397903cfd0030a91",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "edd824981cd956d1397903cfd0030a91",
".git/objects/pack/pack-0cc02c7f2ab2f13acfa61585e2c6fa23f968efa1.pack": "baad1deda3b22819d6838c5f9ed3dee5",
".git/objects/pack/pack-0cc02c7f2ab2f13acfa61585e2c6fa23f968efa1.idx": "d6d170091f6b122c93a71c1c43819064",
".git/objects/af/5ed5a4344728afe9bf3e71940369bc3d5fd7f5": "4b9f5df479a390f03c4b768475220c8c",
".git/objects/09/3f0dcc80a5dc07387273da41ec0b9d197374ad": "a77e9d1b6e9a32445c030231024d6ad1",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/96/6afbfb6e690ceaaee2e216de4e76186d5dbe17": "7cd274d842d988e7bdc5e9bdce2bcc83",
".git/objects/32/82a891d46eec2d856ebab2798479308dd2dafe": "35f39c28ef0a450b338181bb7bea04f2",
".git/objects/4e/c7df251fc3f225c27eda40198d20a747ae4e7e": "9db63457554ddfe507a6e5d464f9fff7",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/eb/311a795e12b1501cfa4d8232c64ca7de2ef250": "688e3819e01629e957d535f74bdc7c6f",
".git/objects/5d/69102f2d8389ecd05ee930379a5d9790885b03": "e7c165df5463247cca7b378851b17a54",
".git/objects/1a/bfca53f0806edf5f221454d3ef2a9196e42ee4": "46b5aa4d4018f653844eefaa2f6717a2",
".git/packed-refs": "7adfab7e6cd1d2c66624e6995952fc09",
".git/logs/refs/remotes/origin/HEAD": "ad62db6454f09106b8e0ec5ff7b4c8f1",
".git/logs/refs/remotes/origin/master": "bb9979b444a19c23dc63eb40e41c5c73",
".git/logs/refs/heads/master": "8410a19f3ff2cf5eefbad4fb90ba9167",
".git/logs/HEAD": "8410a19f3ff2cf5eefbad4fb90ba9167",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/config": "c8826e5678ff36f12c39e3d2e7a9b60a",
".git/index": "1df498e3869ab3653dbe4eab034e0a3c",
"CNAME": "0f8f0d771cf008f6503a2649bc814042",
"google1c606dc11d8251be.html": "63d441e37fc94435ab57eaf6deefbc72",
"main.dart.js": "a28ceecca1f26172b14f3091105246b1",
"version.json": "9287917d5c26758bde5ab2e1f1bce367",
"assets/assets/homepageFoto.jpeg": "17104243f8c2165b7dc862b74ece3647",
"assets/assets/corner.png": "9f437efe6147bd0772c96384b4caa117",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/AssetManifest.json": "1c533bd65489eaade82e3c6101f29d97",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "36bd0ab3a48b1149f1a2e4e50de627a6",
"favicon.png": "fb6dc5a786b553c401b6f3656553c584",
"icons/Icon-192.png": "9517ce164b488e6dde290813ebd970dc",
"icons/Icon-512.png": "092fbfd575939be7c6024fe361caf59c",
"icons/Icon-maskable-192.png": "9517ce164b488e6dde290813ebd970dc",
"icons/Icon-maskable-512.png": "092fbfd575939be7c6024fe361caf59c",
"manifest.json": "a3268e890a8d34f9af7bf3dd50391487",
"index.html": "d2bc1849d56ab623945964da9e5b0c40",
"/": "d2bc1849d56ab623945964da9e5b0c40"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
