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
".git/refs/heads/master": "c22dac80448242dddbded9fe72959a61",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/objects/pack/pack-8aaf8a916f806a05ef61e04ff3e23aa97b07dd18.pack": "61cff652fd2ef01ad6edff945c7413a0",
".git/objects/pack/pack-8aaf8a916f806a05ef61e04ff3e23aa97b07dd18.idx": "344c110e7f08e43d87d5dc10e3f27ee7",
".git/packed-refs": "53b444e704be1840bbf0c29a2a537496",
".git/logs/refs/remotes/origin/HEAD": "f3bc194df1f393887b3df17407060539",
".git/logs/refs/heads/master": "f3bc194df1f393887b3df17407060539",
".git/logs/HEAD": "f3bc194df1f393887b3df17407060539",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/config": "b8a99379ee176a916d1a0908f3983951",
".git/index": "09783e77930b9e6e2981ecd2b6b7c45d",
"CNAME": "0f8f0d771cf008f6503a2649bc814042",
"assets/AssetManifest.json": "1c533bd65489eaade82e3c6101f29d97",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "e798e03d0d45e3688279b00f370c1eb9",
"assets/assets/IgLegends.jpg": "af4899342f987d21f56fa0d99cf1e660",
"assets/assets/corner.png": "9f437efe6147bd0772c96384b4caa117",
"assets/assets/homepageFoto.jpeg": "17104243f8c2165b7dc862b74ece3647",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "a292c2d40c997caf5265b36c35b90817",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "fb6dc5a786b553c401b6f3656553c584",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"google1c606dc11d8251be.html": "63d441e37fc94435ab57eaf6deefbc72",
"icons/android-icon-144x144.png": "649b5a5d666b81093fcd5f76ad378762",
"icons/android-icon-192x192.png": "bb15bec639b846fb8070c7e2e06f5926",
"icons/android-icon-36x36.png": "7ec99066a67597a567b8b72edd07b89a",
"icons/android-icon-48x48.png": "a352811339a2874d8f2f2c7205050a06",
"icons/android-icon-72x72.png": "b53fe9c5e860b643dc8bb24b0508dedd",
"icons/android-icon-96x96.png": "1ca20b4f4c5d2e6dce9c5994ba0f152d",
"icons/apple-icon-114x114.png": "e6d8fa7c57542172e7e37eb1e57e1233",
"icons/apple-icon-120x120.png": "be764c010149faf3cf04048c38817920",
"icons/apple-icon-144x144.png": "649b5a5d666b81093fcd5f76ad378762",
"icons/apple-icon-152x152.png": "87275f92bc6717cbea470d69516ee82f",
"icons/apple-icon-180x180.png": "b37063723b37feb3db77b4d2136c2870",
"icons/apple-icon-57x57.png": "baaf01248f4494d30292634ccfcfef0b",
"icons/apple-icon-60x60.png": "1a8029bd9e657a388b11cea3b28179b2",
"icons/apple-icon-72x72.png": "b53fe9c5e860b643dc8bb24b0508dedd",
"icons/apple-icon-76x76.png": "061acbc1c07a3350b6d9214110dafa8c",
"icons/apple-icon-precomposed.png": "09f43c059a586c2f2a214f81852e2ab5",
"icons/apple-icon.png": "09f43c059a586c2f2a214f81852e2ab5",
"icons/favicon-16x16.png": "920ee2392fedd98dbf1f64584831cf43",
"icons/favicon-32x32.png": "44cbd3850a8abfb903158f19b07a7f05",
"icons/favicon-96x96.png": "bbd6da5291fd555e61303bc58b50ffd1",
"icons/favicon.ico": "877cb3921e98f2fd9e6fb33f4c49fd19",
"icons/ms-icon-144x144.png": "649b5a5d666b81093fcd5f76ad378762",
"icons/ms-icon-150x150.png": "feb967809354a4e441b708e2101e8eee",
"icons/ms-icon-310x310.png": "fd5e67be5f1d7b7f89f99deeb82ee699",
"icons/ms-icon-70x70.png": "f99e4588f1de4023b82b9cd1e2da6cc7",
"icons/Icon-192.png": "9517ce164b488e6dde290813ebd970dc",
"icons/Icon-512.png": "092fbfd575939be7c6024fe361caf59c",
"icons/Icon-maskable-192.png": "9517ce164b488e6dde290813ebd970dc",
"icons/Icon-maskable-512.png": "092fbfd575939be7c6024fe361caf59c",
"index.html": "d9a76f84d71fe2150cdb2fe8245f4fa1",
"/": "d9a76f84d71fe2150cdb2fe8245f4fa1",
"main.dart.js": "1690a3bc6e72626a41f25fd69967ee71",
"manifest.json": "a3268e890a8d34f9af7bf3dd50391487",
"version.json": "5639ed2b440c5b84461754444048da86"
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
