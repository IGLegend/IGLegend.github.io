'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "6cc862fb961aa3b754ec9fc4fd48f359",
".git/config": "f067b5bee0c920712cd9e5a8f5546330",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ee393104e875560f0db8eda81be81f4b",
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
".git/index": "412d4b7bd3e37a209538f435f268cf48",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9e05d1a4551f0ae24883c430159d403b",
".git/logs/refs/heads/master": "9e05d1a4551f0ae24883c430159d403b",
".git/logs/refs/remotes/origin/master": "3ffa28ac80d500ea3e7084507138d2fc",
".git/objects/00/5ae8a029012eac12a17ec8aa91eb920ec1d8a2": "f0df17d22ca1d61550e63c7da5096480",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/f3f7fd34c7992609440ccad48accd630eaa60d": "b12bab059db08984e57779c03d302138",
".git/objects/0e/cabe1f70a1b23b2089541343cbe1c92e84a087": "ffd0074f13970ee4c2a00852f09552bf",
".git/objects/0f/c41165fe99459b5c144a6d4548f53590c35db6": "f077973598b3450105188b3eb43e0484",
".git/objects/13/a1c86467ccd73cf7ceb6933d273a20c5e512da": "18591a1247c2c9fe5d671d0fe48fc511",
".git/objects/1b/2d3b8a5d90d7524126b8901dfdf77fcc3dfc7b": "a825ebedbfd9b38ffd0aede0951386f1",
".git/objects/1c/3e0c3c65feb5d8817af0bb67f2e300f74a3167": "873c6c7c890081353088fc62a35e9d3a",
".git/objects/1c/60575c9ffebe2917bcaf9defee1c3f97ac4fb6": "f68e461400e4d361cc007b755c1acd3d",
".git/objects/1d/100c057473a787cb0f97fef7f710f46c9139f6": "da690a0696d82a7a3ad1f33e92db47cb",
".git/objects/1d/eb8586a90e6dadbee8a66defd2730e15f1c60c": "5671cf4bc432d9a477211a8e3cf3b842",
".git/objects/1f/bb7933816b2094d13e6eb13ef53ff86fc6abb9": "373bd1333f0e9470cf1eb1534bb351ea",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/b9c90c457518e33e062012698adcc905e0e564": "5af5c5a2bbd9594bf4f27b26a429de90",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/41667bab29aedb37e6c8e8dd65e6426f659f69": "1d63cb506adb5be3c743c7fb35122740",
".git/objects/26/444aa9b5478f6272d7bde2680e329077333431": "a867e3347aedae6770b7025563535ff7",
".git/objects/27/7e4d09eecca0a30c06b00fa5f427c8dde4bb5e": "5b826f15040ecc5b2ff7b2827fbf2420",
".git/objects/2b/f1ea942ab0108641adcf92b715e0614836cb63": "88b91b306e6aae454626d987aaa6859e",
".git/objects/2d/43805af3d0870543fd9c0a2028ac96532409ba": "f7b929470d3df747c77f023231ba321c",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/1ea276474705c5956c742cbf3bde88a085cf0f": "4f6919b90842e2ca382a9eeb684280e4",
".git/objects/38/6ae02257f0e12e5cd2c7da7601159054278bc4": "1af87b08b9f609a841acf78f6b205996",
".git/objects/39/de6bc781695254079c5554ac9a1ceeb5787c5f": "7c199496c93172e8bfd07662d5e49b2e",
".git/objects/3e/432a152179956cfe12e2950b8ff174b71cc83e": "826b5cc9c80202498cefa215496978b0",
".git/objects/43/5b164f7a6bc6c26a83cf465651b30baa2850aa": "5a45f51828e73ee498d69d72d3b9fc88",
".git/objects/43/707fdfd2a99253dac5573ebc1d32e96c66a624": "91fb025cba5047deafa42cc1e407bc23",
".git/objects/45/27bea95849505f822e732d0588692df0006019": "9bec3d765f75ef0dac1c0fa8d86e7239",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/d3f252fe53f844a1ac5288464c7482bace8ca8": "1be3dfd4696c232072765035282b5eda",
".git/objects/4c/06c68f03d3e1cebda59c56cc2a34d04e9c82db": "4c66196c4751f42dee37598473447da6",
".git/objects/4c/1baf40b399253eb9f259c85df4b33b140a07a0": "c585678fb9b47f94a5cdbd5708b22db3",
".git/objects/4d/3b1bca2e9ebc80214620c42802555e0c4d5a53": "a9437e5a9297049f89b1892011aac99c",
".git/objects/4d/5f2d2ed4fda5f60dc9197363285017b63ef152": "52ce14581101bd9834d9e178150e92bb",
".git/objects/4d/d6f17229cbe31283a38dae2006c94562d24124": "4678a8c3463ec4f01e0012197bb49df2",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4f/d85961f601710083d2bc1dc22be85c883eb8b1": "4dda27b8b4bd3b00d4bf4cc948c3708c",
".git/objects/50/198b016dabdb7dad35e1f100b418bc2faf872d": "ff96c329aeba525c61e4023870134067",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/53/e3ed2ff0ed03448339fbe8e6bc936fb921bee2": "dea4388e9fb84d063576abd28b73ad3f",
".git/objects/5a/cdf2e3169f9a13398a5f1f14445ea2c62ab124": "82884729da168392d229d7e9b01a7147",
".git/objects/61/9b41f7d8247ab46cd947bedadcbca4cf8be93e": "caa664ae674713f38952aebdbc1c152c",
".git/objects/62/684ffcbe950cbf1c327de7dc609c4ccf2568e1": "62f3911c6a70c2ed54ffd0cd4f8c0457",
".git/objects/62/c63b0a90d0ce4f7d8640b50adc31043e67922e": "6597ba00451aa7ee8c64698d928fe920",
".git/objects/63/812c549cf37287f6e55eb60f4729bc05bbca05": "28c133ab5ddd5e37955ca44c25bb4ff0",
".git/objects/65/647fb5bcca55e208cb176be85c26cdd9315dc2": "1d19117857b7683440941fd0eeede76f",
".git/objects/65/bdd35021ea1bb0a5becbfced42176565546f3c": "f95d1c2bb239c7d43faebf19ae164655",
".git/objects/6b/9922376991c6afc0b52912cdbcf73718007caa": "6067ef0bc7bca79aecef1639a352066c",
".git/objects/71/2678dcb3c2efe9604a10313c1d41d3b7e47a05": "34c72f0858dc84c12215f68051d71e32",
".git/objects/71/841d5c155edff81c556cee88081f88d8da5448": "8a7d14483860c9dfe38efde21ed83073",
".git/objects/74/33b3759fc178c2464351d941d8f39f21618de2": "06890f304b44fc35478d50a7067e27a0",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/01eb5932c615e9647eb2962c14ff49602679f2": "b2e0e6af560e5087be42d26696e11ee0",
".git/objects/7e/65cdd47f86b012f0a1a9aa0c49ae7bfa30173f": "9942d6a52bb5933731a8425ce79bed25",
".git/objects/80/ae6c7f1b8d23e12e46763684cc4d042c553aff": "0e38508398138532dd25d992ffacb300",
".git/objects/82/d9094fdf27cf0102182531425289ac2e548a6f": "454f00c762932f7a7069762c8a4ebed2",
".git/objects/83/9916ee2efeeb3b5682dd178383085ec48a5f23": "69c56455ab22b40198f326ac2cd56708",
".git/objects/87/0af39014302feb699d77eddcfbc410c758a5d3": "77ed1bd17af34a39108966dc3fa24537",
".git/objects/87/748811d9bdbffffa46bb959351dcefc851eef9": "f6ae000509c1c6189205c1dffee84fb3",
".git/objects/87/f054e04ed114946a8053f1e1af75ae02515ad8": "5564957db507df4c078a0fee4df56451",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/d680f50734055728652f1effdcf4c2924e6ac2": "5d5948fa1dbe23ea20747573e26a02f2",
".git/objects/8a/22c8a0acd0ac59f84d9e500a90be051e214663": "9fcd94450b3beaa2793d5bba9122f628",
".git/objects/8a/496d66703a83635e08e7573d01d9b691f710bf": "fa2d3f2dbe88318f07b32e53a7987338",
".git/objects/8a/7c8b25d034c05f10cbbd061f08cfaff02dc138": "cbdd07e63646c7c5e3f711feb599a67d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/dead53a87eeaa5e264843124433ac830d65bd0": "793a13584f87f18df5666a6909cc4a10",
".git/objects/8b/1a83b5e5daab79858f4038ae6b5cb9b497f061": "93322be815f54cfee53713c89566d76f",
".git/objects/8f/65584cd7a2211466ba86f8ff6475a47529967f": "bb6ba7eea75ac10fb636c7533858ba60",
".git/objects/90/08551e4a3cc463b50f02cd678f76199ed283bd": "be90f840bec81c291670b44dc2e195c5",
".git/objects/91/682ba7642662cd1d43d55bbcb14bc93d6ba62e": "7253b8c2bb2a3e6d93d786bbf2ace19b",
".git/objects/93/1dbfff55645e4e25bbb6181b628aa0672e7b50": "b0f2ca9bdbcc2c6df4bed61a3ab9f78d",
".git/objects/96/6a86e33b45889385762830f8361b7984678bbc": "d6eb0546fcac5302b9c88edd7eda55c0",
".git/objects/97/b8a9f22950c13cd86e51a39caf14461dfce821": "f39d26f450472f3bd9956ba16e3e11a8",
".git/objects/9c/86fd55361cc8ab6c7f9ff604487bc3400b5146": "d45603bb0acbf042f4af858e264ba7e3",
".git/objects/9e/74992a9c0b14082992fd3abce0fdfc4d335701": "147e0bf3b5502c01c8722b4b348b3146",
".git/objects/a0/b77792735fdfca9f7248962cc23c5a0688aed3": "a568f1831189aebaa59a95a28105e24b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/0ed284dcbafab9386567bd5037252ac52d742b": "c3167843ff1e0fe0b340423adeab1776",
".git/objects/a3/e94428460316c948335c216797028318bbfa02": "145e9f5aa05a8c54242776149f93066f",
".git/objects/a4/3d337736083e5d07763b19282af0e01a0e7a8d": "78fb47b814154012f461d53658f8e2e1",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/a8ac626372c5f3a838b69d1333491eccceea34": "a0275e55e2016e97dfedfb83c480fee7",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/1de8b0ebf6cae94443c6d29e9486d568b209b3": "7ffcca5eb8fc11fbce3806a14e0485b8",
".git/objects/ae/1cccc7ca6ebf26b1e4104baba791f1ee278785": "d6c9a4268f64077e9f6637d2afce5d73",
".git/objects/ae/2c209cd0e65556c1632d1f7f781d52a7e92ddf": "be6486e79a3a9c36624a01a3f9c0391d",
".git/objects/af/3bf31084fbcb86d5889e0a239c4c6dcaf46f77": "76f6b6d2ea9450ccd4d4126f83acd971",
".git/objects/b1/bba8e9e06ff08d33ad8aae3def356b6b65132b": "6780f43aefca323c0b6d303b4615cb41",
".git/objects/b5/fa6f56c6198ba6cde872677624e9d7a01d6515": "2c99ff80923dee12f66cf7cd8bf54802",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bb/bdc02b92c4d82615f3436c546c9a9a926c1631": "c919fc2d7ff4b274b71bd9804be695ed",
".git/objects/be/0390d60e660d51fbfc8474d288b7baaf561976": "73d54ae8c6d9344fc27b144c9000d716",
".git/objects/c2/2c13a9c9e29433535fdce870d8ea89446db339": "ee9ff724e5f085126a04f5616cec9541",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c3/ac76f80a76265a3413d41625ae4394df2f75d1": "b3ebe94bc335b094fd5c001351f2034d",
".git/objects/c6/b8028328cd1502052a2c33a7d6bb6e4bcb71ac": "85d0e902980e69fa9923fca886662940",
".git/objects/cb/722b38832797e8870bd044cd4064fea082819f": "510052fab55d940f3dc885205486f971",
".git/objects/cb/c7ad62a6d6d9fc9172bb4e07ea33451f323f32": "a12ed5d2b5169c9085d8185cdab74909",
".git/objects/ce/3cd5cc435bc01a5240829958c802a58cf4a34b": "48fa6488d0bf1880a927f653becbeaaa",
".git/objects/ce/52a101ccb5a31f61118ba51c1d1395f9b73db3": "180c839d9d57aa5c3b2344979735f704",
".git/objects/d0/5063cae11a7c2c3d6b1d0010405801cd37a637": "6b595f36cf918ad6d7553efef53edde5",
".git/objects/d4/53422b9aac0a459cdcb3d7ed7ab058f49a6653": "e7ae0dded0b7bfb5b0f5d9f651d08712",
".git/objects/db/da905a883c18598a781e27b2df6ac17f4a9797": "d42c83f60e4dbe9fdfd8e51335fa4cfa",
".git/objects/e5/124edbf3eb07affc9d979a66976a00e0e06b30": "a319597d6d00b5d5defd42045d0046c4",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/1468864f0b8c10afc4aba7098919180120c335": "c2dc9fc43f965c2228d0b5438808de8e",
".git/objects/e7/952267b7ae6b4cb09ccec74a6f58ea715cb8f4": "37b754fbb25a8642f271a251a8f545a9",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/2b9fcda253b0653efa4239aff76b1756433510": "fc4117de69a790c40463383cac805184",
".git/objects/f1/595a5453df8a763d6d903868509c1d4536d0ff": "2792ff3d42dfb1d4b5a13593dc2a9b72",
".git/objects/f6/a90c4894e269e8197c5e890c03c341007999fb": "e8c90b7ab3b47c6f15db2cd5e24e4b66",
".git/objects/fc/28fedbc72232ab4acea83169c7d06469612d31": "b6436fb0628ddab6a4052e43f900d63e",
".git/objects/ff/8efe140a842e0c1cb28190e928be20a71dc328": "a4708355f273426547cd847531833185",
".git/ORIG_HEAD": "ef32cca64fd6fd039e0e8048c39a32aa",
".git/refs/heads/master": "37f4c3ad7e1594d8fb4acaeccd8b45c8",
".git/refs/remotes/origin/master": "37f4c3ad7e1594d8fb4acaeccd8b45c8",
"assets/AssetManifest.json": "bd2bba9a51c0ba33a903bf3da8af43f5",
"assets/assets/corner.png": "9f437efe6147bd0772c96384b4caa117",
"assets/assets/homepageFoto.jpeg": "17104243f8c2165b7dc862b74ece3647",
"assets/assets/IgLegends.jpg": "af4899342f987d21f56fa0d99cf1e660",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "8305f319828fa0e1484e6232e1718f8d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"CNAME": "0f8f0d771cf008f6503a2649bc814042",
"favicon.png": "920ee2392fedd98dbf1f64584831cf43",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
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
"index.html": "3c5754b77176733eeffdc8744d03cbb5",
"/": "3c5754b77176733eeffdc8744d03cbb5",
"main.dart.js": "55605ca38b51e11a7641e95401d432bf",
"manifest.json": "fb2144ebe480417bd6bdd2f9a85379aa",
"version.json": "5639ed2b440c5b84461754444048da86"
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
