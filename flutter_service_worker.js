'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "48601e80e18d5810abe39a1129fc592e",
".git/config": "f067b5bee0c920712cd9e5a8f5546330",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "673ada136c9a1935812dc915703e3fd4",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e7b2f62dd6dbde75a932baed3affb2d6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c3936ea748f52366ca96eb98c2707ba8",
".git/logs/refs/heads/master": "c3936ea748f52366ca96eb98c2707ba8",
".git/logs/refs/remotes/origin/master": "e25db4aa40bc43f48ab7109dbee90b2e",
".git/objects/00/5ae8a029012eac12a17ec8aa91eb920ec1d8a2": "f0df17d22ca1d61550e63c7da5096480",
".git/objects/1d/eb8586a90e6dadbee8a66defd2730e15f1c60c": "5671cf4bc432d9a477211a8e3cf3b842",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/25/41667bab29aedb37e6c8e8dd65e6426f659f69": "1d63cb506adb5be3c743c7fb35122740",
".git/objects/2b/f1ea942ab0108641adcf92b715e0614836cb63": "88b91b306e6aae454626d987aaa6859e",
".git/objects/2d/43805af3d0870543fd9c0a2028ac96532409ba": "f7b929470d3df747c77f023231ba321c",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/38/6ae02257f0e12e5cd2c7da7601159054278bc4": "1af87b08b9f609a841acf78f6b205996",
".git/objects/3e/432a152179956cfe12e2950b8ff174b71cc83e": "826b5cc9c80202498cefa215496978b0",
".git/objects/43/5b164f7a6bc6c26a83cf465651b30baa2850aa": "5a45f51828e73ee498d69d72d3b9fc88",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/d3f252fe53f844a1ac5288464c7482bace8ca8": "1be3dfd4696c232072765035282b5eda",
".git/objects/4d/3b1bca2e9ebc80214620c42802555e0c4d5a53": "a9437e5a9297049f89b1892011aac99c",
".git/objects/53/e3ed2ff0ed03448339fbe8e6bc936fb921bee2": "dea4388e9fb84d063576abd28b73ad3f",
".git/objects/62/684ffcbe950cbf1c327de7dc609c4ccf2568e1": "62f3911c6a70c2ed54ffd0cd4f8c0457",
".git/objects/65/647fb5bcca55e208cb176be85c26cdd9315dc2": "1d19117857b7683440941fd0eeede76f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/87/0af39014302feb699d77eddcfbc410c758a5d3": "77ed1bd17af34a39108966dc3fa24537",
".git/objects/87/748811d9bdbffffa46bb959351dcefc851eef9": "f6ae000509c1c6189205c1dffee84fb3",
".git/objects/87/f054e04ed114946a8053f1e1af75ae02515ad8": "5564957db507df4c078a0fee4df56451",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/22c8a0acd0ac59f84d9e500a90be051e214663": "9fcd94450b3beaa2793d5bba9122f628",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/65584cd7a2211466ba86f8ff6475a47529967f": "bb6ba7eea75ac10fb636c7533858ba60",
".git/objects/9c/86fd55361cc8ab6c7f9ff604487bc3400b5146": "d45603bb0acbf042f4af858e264ba7e3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/0ed284dcbafab9386567bd5037252ac52d742b": "c3167843ff1e0fe0b340423adeab1776",
".git/objects/a3/e94428460316c948335c216797028318bbfa02": "145e9f5aa05a8c54242776149f93066f",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/1cccc7ca6ebf26b1e4104baba791f1ee278785": "d6c9a4268f64077e9f6637d2afce5d73",
".git/objects/af/3bf31084fbcb86d5889e0a239c4c6dcaf46f77": "76f6b6d2ea9450ccd4d4126f83acd971",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/be/0390d60e660d51fbfc8474d288b7baaf561976": "73d54ae8c6d9344fc27b144c9000d716",
".git/objects/c2/2c13a9c9e29433535fdce870d8ea89446db339": "ee9ff724e5f085126a04f5616cec9541",
".git/objects/cb/722b38832797e8870bd044cd4064fea082819f": "510052fab55d940f3dc885205486f971",
".git/objects/ce/3cd5cc435bc01a5240829958c802a58cf4a34b": "48fa6488d0bf1880a927f653becbeaaa",
".git/objects/e5/124edbf3eb07affc9d979a66976a00e0e06b30": "a319597d6d00b5d5defd42045d0046c4",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/952267b7ae6b4cb09ccec74a6f58ea715cb8f4": "37b754fbb25a8642f271a251a8f545a9",
".git/objects/eb/2b9fcda253b0653efa4239aff76b1756433510": "fc4117de69a790c40463383cac805184",
".git/objects/f6/a90c4894e269e8197c5e890c03c341007999fb": "e8c90b7ab3b47c6f15db2cd5e24e4b66",
".git/objects/ff/8efe140a842e0c1cb28190e928be20a71dc328": "a4708355f273426547cd847531833185",
".git/ORIG_HEAD": "3d08f8d3427f0bca7711dcb92c3776bf",
".git/refs/heads/master": "a95ed2a4510a2fde855fba555491b733",
".git/refs/remotes/origin/master": "a95ed2a4510a2fde855fba555491b733",
"assets/AssetManifest.json": "29465534f542a96f2bd1e148d9de1008",
"assets/assets/administratie/4deKlas.xlsx": "73a0f5c1a1cac0ad02a24f5b91bbdba9",
"assets/assets/administratie/Mentoren.xlsx": "da77edb2b0b3f417e823debcf48da658",
"assets/assets/IgLegends.jpg": "af4899342f987d21f56fa0d99cf1e660",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "bfc6dff947ac73ed0fc863686cf0867f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"CNAME": "3bdcf11138601b832b17cc46e45fd9c4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "2a056bad24126074c9b768a23708387b",
"/": "2a056bad24126074c9b768a23708387b",
"main.dart.js": "09364cf77a264d01649395cb235379d5",
"manifest.json": "d80941ba4df3bf4a25fd40025c71396d",
"version.json": "968e41f76f4cb3208f3a23a20c522904"
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
