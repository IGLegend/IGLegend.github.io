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
".git/refs/heads/master": "2e5db7f93e4f25861511e4a4a816b437",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "2e5db7f93e4f25861511e4a4a816b437",
".git/objects/pack/pack-8aaf8a916f806a05ef61e04ff3e23aa97b07dd18.pack": "61cff652fd2ef01ad6edff945c7413a0",
".git/objects/pack/pack-8aaf8a916f806a05ef61e04ff3e23aa97b07dd18.idx": "344c110e7f08e43d87d5dc10e3f27ee7",
".git/objects/93/162128d6b014e8d21d0d4153e42988af844f61": "4f06719c57e101e12ae12e01285f197f",
".git/objects/54/0c168cc7c9ef58600612377f9b5ac4b3520afa": "2387c23b1b283d403337715e75f1a9eb",
".git/objects/53/25eee4f9028226b63993c1485a9b4118349952": "fb06418a5cc4b7820fd1eb65015125da",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1a/f372e23af81ec13bde40f39307f67c973db474": "92399b871861d797194e2bf4ad215c2c",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/58/5f06f3aff63cade1c54a7655a778e8e873f797": "1d3e852e8312e95e19d00c7008a40edc",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/d8/e452333670a0f0b34b7cf404736ca224097f4c": "df89fd687799e4a106d422bc469576fe",
".git/objects/d2/9e569f7660e2c18ce12e9d61bfb2efa4c8c7e0": "faf4b7b8a0fa39c9b76607edf19370d5",
".git/objects/b2/cf945f35d917f1700ab50de1e9690cb2505e9f": "88e39270fab807ad8213a1606a83e168",
".git/objects/d9/aedf031056ba88923bd653d63abc950e7eca65": "ca6116e479efef1d553b650104b9f8d2",
".git/objects/62/53e7bdb452822593cb23623a7d77c856dd8fe8": "68eddd5c5911a79e7f9b5f7c1d8c1eb8",
".git/objects/a0/cba1c4270d52931fc8aec6407c3358b54a4f54": "a460844505476b5c43ae2ea6455b4d12",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/f3/07cca43231f2f780c740ae669a33f24ad8b94d": "833f261d53cdf211f60b68548a459f51",
".git/objects/c7/56b6aad566653b55bd4c607952d383e5256955": "2da456915beb147a587e2f142714cc7c",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/d7/5ace87e36498fb3549ae5bb5e5c0cbea129123": "68ba355ec5dbdac6a690c6aaaf874512",
".git/objects/49/32ea87b06b8a9063ca60bde3cfd85742ad19ef": "3dce52aca47eecc2ae9ac148b5b406ad",
".git/objects/ee/b4334b8fde43ccf5c19fa724e523facd05ffde": "dac016773b639bf2d8ab7cf476962591",
".git/packed-refs": "53b444e704be1840bbf0c29a2a537496",
".git/logs/refs/remotes/origin/HEAD": "f3bc194df1f393887b3df17407060539",
".git/logs/refs/remotes/origin/master": "8aeedfd95f22a4f0e8e4a69abc858c4a",
".git/logs/refs/heads/master": "f5c8151db7bc6e9718abc528b6f3f605",
".git/logs/HEAD": "f5c8151db7bc6e9718abc528b6f3f605",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/index": "fa33601da66f2e5d25dc0c50d53091b2",
".git/COMMIT_EDITMSG": "994e5be80835ae04446d0302eb730be0",
".git/config": "016e255d2021f6517069f8e0e530f818",
".git/FETCH_HEAD": "5df80bdc56c21564a15e25a2845cbb1a",
"main.dart.js": "6d0070ff8a5b47d18b3f9bc1b330e12d",
"version.json": "5639ed2b440c5b84461754444048da86",
"assets/assets/homepageFoto.jpeg": "17104243f8c2165b7dc862b74ece3647",
"assets/assets/corner.png": "9f437efe6147bd0772c96384b4caa117",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/shaders/ink_sparkle.frag": "a292c2d40c997caf5265b36c35b90817",
"assets/AssetManifest.json": "1c533bd65489eaade82e3c6101f29d97",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "e798e03d0d45e3688279b00f370c1eb9",
"favicon.png": "fb6dc5a786b553c401b6f3656553c584",
"icons/Icon-192.png": "9517ce164b488e6dde290813ebd970dc",
"icons/Icon-512.png": "092fbfd575939be7c6024fe361caf59c",
"icons/Icon-maskable-192.png": "9517ce164b488e6dde290813ebd970dc",
"icons/Icon-maskable-512.png": "092fbfd575939be7c6024fe361caf59c",
"manifest.json": "a3268e890a8d34f9af7bf3dd50391487",
"index.html": "766eae6fc6a687bd486e2809e75da8c8",
"/": "766eae6fc6a687bd486e2809e75da8c8"
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
