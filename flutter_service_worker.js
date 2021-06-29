'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "4568757cfa0224d629b9faee05418e81",
"assets/assets/images/cover-bg-in.png": "aa13f1c1f54808584ee3aaaa7477ceb2",
"assets/assets/images/loading.png": "b5079f33bd7a1edf602089f50415d114",
"assets/assets/images/needle.png": "e5e615d8a23e2a8cb56ed6de71d62bae",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "bbc66a04bb13b78befd430fd1db0b32e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter_music/.git/COMMIT_EDITMSG": "f0aa99eb9a82114bb8ef3e297260d315",
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
"flutter_music/.git/index": "4d281f06d99e866cde2f6612eb99c78f",
"flutter_music/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"flutter_music/.git/logs/HEAD": "cff2d69352e49060bdcf40de1dce9cb3",
"flutter_music/.git/logs/refs/heads/main": "cff2d69352e49060bdcf40de1dce9cb3",
"flutter_music/.git/logs/refs/remotes/origin/HEAD": "523493c25c16fb773dffe7f57d6f87e8",
"flutter_music/.git/logs/refs/remotes/origin/main": "43eece78a9553950ec59b65ce3bcf4af",
"flutter_music/.git/objects/02/719e6ddb8f89df6f7a572e119b7d25e0b13774": "7eef17aaa7014642f01bc897e7268c14",
"flutter_music/.git/objects/04/205db8e57bf492021f890f494e30cb5b094d72": "dd0c891bc73cc912f6f2b292ff02850c",
"flutter_music/.git/objects/06/38bdcdb30071c7041dc4d4d5c46200739f6486": "6c1d0794a6baf9b25f21740f2a5a0dba",
"flutter_music/.git/objects/06/8abb1cc00b12bd36575fcc29d521f8b900717d": "0d414a4d8b7cd242c545a58a3d48b8af",
"flutter_music/.git/objects/08/544d2c039531f757f3be7dba884bebf5594048": "6238b9a9e983aa863f6cec9e1ef75b67",
"flutter_music/.git/objects/08/caa1b50ddb3e9e22ac58b6ebef40e38579f09a": "5a34576f0409012a839d9e6b6844ce6a",
"flutter_music/.git/objects/0a/26bfe33d089eaf1a2afe1713bc768d3b000a23": "5da4b4b8bc814076a937da973eb8778c",
"flutter_music/.git/objects/0c/741cff2af2ca976cfb07022e95486defbec67f": "2164c90ec23f8df88506f11079a2c303",
"flutter_music/.git/objects/0d/aac16fe09d401f0f4a14f33f9febfa36b97040": "321d55e2fa8d489bb6bd5f811b89bee3",
"flutter_music/.git/objects/11/01569888f8c918e22c8e78f1052d9186d585e0": "a6da5156b8ea42024f842b7b09b9dd1f",
"flutter_music/.git/objects/12/92be4c83c9abe2ad4b236b012303de68c018ad": "d354242ecb953799629de46a55c7b900",
"flutter_music/.git/objects/12/ccb330338681127ef6f59b0f0d46fc1a3ef0bc": "3e265500224e3bc22e664d1bc7955f7d",
"flutter_music/.git/objects/13/6821082c8cc53138b77ce21f803a45638dc669": "dde0be7e8c9cf296fd5a70ce4e4511e2",
"flutter_music/.git/objects/17/ffedd856e13ec064e1a556e9a9860b91d809fc": "d1139a4238ddc36ff81468bd84cc6b73",
"flutter_music/.git/objects/18/81bf925666c4cca3b26eb7b889afcc6169dcab": "5ae7904607a1c8a0e9d54287cd0e60fc",
"flutter_music/.git/objects/18/9380b4c7eef2356719cfd270d503ad38f6cc69": "5c1e4dcd96b54539304bb2d05b3b4360",
"flutter_music/.git/objects/18/ed723ed92ca40c4533ba1e300519f80ddc0c60": "509bb21ac05391a3231845425b71e661",
"flutter_music/.git/objects/1a/e7796f68db69a8533f439668ae33a0060e9184": "7ee2794a66d3b5d78cbbb64cfd485c5f",
"flutter_music/.git/objects/1b/2a98180bf97279f18fa32d81155362490ecc3c": "e451b85421d0efed733a14f566b6c322",
"flutter_music/.git/objects/1c/5e96a59ea1eb261ca691a64d22ce851929cb8a": "2f62bc488d3cf5005b58a2a2760cdc3a",
"flutter_music/.git/objects/1f/b928f876d394d1d756a3e23c31aeefcebaeb37": "4ee1ad052ed6f38517bdea21f1e04b1b",
"flutter_music/.git/objects/1f/c7676bbc95e60dac353d6686ce5474a013fdbd": "9d5446fc5a1926e75244585ee8311436",
"flutter_music/.git/objects/20/1d04bd75e6bca732521a5cb11181189e4d1851": "fc80e1c83c13f7573173890478a482a1",
"flutter_music/.git/objects/21/fa86f6f050f1dab91f7545b8e4f065648074cd": "e065912447d2d4cba2b826cc526c3a35",
"flutter_music/.git/objects/23/8357cadd3b13e64d40fa7cb335f65edf56463a": "419d87890a46d1fafcd77673725f2846",
"flutter_music/.git/objects/27/349e754a42f6ba0713831b40ff0afcd022a2b5": "e003b30231350f0f2ea8e1584ca38acc",
"flutter_music/.git/objects/27/3f5b6f575e3fd3d3d340bd3e5385d4894a4fa4": "dc715ea61ad48dd9072de05c7f906d65",
"flutter_music/.git/objects/27/c78c08510a680683c1f09131c02047bd4b4e3e": "f5c2ea0dca3c28f104f16ec55ef99867",
"flutter_music/.git/objects/29/057230e42dd686719fd7d90d56aa7723866c4b": "4320e04d668eec581954bd5a767fbf33",
"flutter_music/.git/objects/2a/7455c8a16d7f80c5dc6fc7ce93036e1a3bd91e": "65da444f365d71d0fe807e78fa848571",
"flutter_music/.git/objects/2a/fd1766ba8f695ca55fc38f18cd0b396feaeb20": "b12cf2a865875b879b56890ce889ab51",
"flutter_music/.git/objects/2b/bc13c348bff6a8ec6212dbe32c6804e2f8f8f9": "cfde414cdfcb9ad6c03d75a6da238870",
"flutter_music/.git/objects/2c/76efc1799b35cc26f513d197fe11f8caba75bb": "ff808be5125d74b3e6192d2f08a45c6a",
"flutter_music/.git/objects/2c/f1ba33060026a23e0fd2b2b2832cf3680dc63b": "703c3af5d90277fb98ddb88d3c49dd8f",
"flutter_music/.git/objects/30/1c9c78e868b264e8916bc5b9179fb9ffc1d2a2": "280f1223889d117b7e4bdfeb69421718",
"flutter_music/.git/objects/31/0cf87deee068ec7671197e85bb69caac27dd6a": "e99a403de7ecfe64cc374490c56b34d8",
"flutter_music/.git/objects/32/ac163982505953f32083aee7fadeb3e92780f1": "815b226af5268f662ded176253e1a1ca",
"flutter_music/.git/objects/33/ef1ea10f25d42c9cb79aed33ad5ee1dd8a3f10": "70cf15faff50056ffc986e3f2dc5cc14",
"flutter_music/.git/objects/34/20bf1d1411793e19ee8550c3777e3bc1220dc4": "68090f31419a822bb97ab5bfa51767e0",
"flutter_music/.git/objects/34/e2f7630b3d4646be646954043c67bcf0e0a6b4": "a98391747356027ef2ecf36f231e95ba",
"flutter_music/.git/objects/34/f6a5bdce8fd03e908493e67975bdde7b8095db": "cb9f14a2cdfc945aa028cf1aefbfbaf8",
"flutter_music/.git/objects/35/0f3c97897f08bf347b056fc5739c8b528a15fe": "b6a484773f2700ce5032f97d09312178",
"flutter_music/.git/objects/39/af3800cceb6fb46be9b16cca766ccae50036f5": "bd229817c4a606f24f90ff572e03bd51",
"flutter_music/.git/objects/3a/eb60964126dbca66c78cf7b12d95226ac5834f": "f9da8bd50b4203944f9777429096e6d2",
"flutter_music/.git/objects/3c/0543e992f53bd23ce77b9f99840e842163e38f": "a2bad261e2aaa8b86cbd330de7e3fcf6",
"flutter_music/.git/objects/3c/b31682acae094e4af75676cb29247c99526574": "3c2ff3d7b30fe49d431cce4962971820",
"flutter_music/.git/objects/3d/1ab99991ba0efa9b57eaacc1aff4629b5cebe4": "37591a930116ef59d0eca58a18126bd3",
"flutter_music/.git/objects/3d/5db653d4559002cc339f8ef94104cfbc950c70": "8ceeaae0c0d6b9ba9835415564a850cd",
"flutter_music/.git/objects/3f/b7083fd98a6ac86f4b7e52f777589f42f81e23": "6ad91d8dd103fd0201fb3fae544d4c79",
"flutter_music/.git/objects/40/06aca54608cd725334a9b4e5889ec00baf8386": "fd2d18aed2a7b731c89c175ae4b876d6",
"flutter_music/.git/objects/40/2c841577cb3181b20f5a3bc3eb43976ee317f3": "188f30e382c5c74661f4d88bf7223235",
"flutter_music/.git/objects/40/6425ab20b61d19c14bfbeebe994c2183bd028a": "6230359fc52c8a6ad62253e0f3947d88",
"flutter_music/.git/objects/43/8c8da149d8367e2d860e3a5d14a4bc506fd1e2": "82bce6c9d1b9fe646f054d4eed8be493",
"flutter_music/.git/objects/48/44fe1b02f62706b43f748c8dea52637bc15da6": "2d25c08068dc9cc79975a6222230bc60",
"flutter_music/.git/objects/48/7005714f56659f8c25d323fcdbe192f3606dbb": "13f771d71abcc10934683cde272095b9",
"flutter_music/.git/objects/48/7615f649f97132d0dbf6265cfb25ef203acc1c": "5dd8c50cb69bdaaceab94f8644434d00",
"flutter_music/.git/objects/48/8840c910daaad5a3517f5c9ab049d3a47e94a9": "a4440ddc0f232f7b929e7c83efa5d356",
"flutter_music/.git/objects/4a/0c6002626624b28b7ed73e2ddd87f68e7294ef": "13c184dee0d43f9c868497312f2a91e6",
"flutter_music/.git/objects/4b/3df4939b2065ae4ffcb74578f41b4790b7eea1": "ddf08a4ac7fc1323e6ed3e03414fe464",
"flutter_music/.git/objects/4c/af8b87260a7c0a7b57ddd38116001fbefe558c": "152c05062500871a8e8ec7219bc96432",
"flutter_music/.git/objects/4d/53ed50af24903b79134c0d7fa01a7dab25991f": "80cbf95de0cb9b036042ef8a0ee2ae4b",
"flutter_music/.git/objects/53/611322111231a02162a02a862cd13d7c0b0f6e": "438d11f628af38fce73a1152d774fa9a",
"flutter_music/.git/objects/53/a1459c13ca60014f95eced9a7d8db61e8fbc37": "18a2b0e5b9e66092580a233ecd97f65d",
"flutter_music/.git/objects/57/53806844f99c3ceea3d39b32ac107e84c13e45": "83cb4a64d37249a5decb355b24912d79",
"flutter_music/.git/objects/58/e5a696195ed49378aec3f42f924a15286ac082": "b1f1eb86125138e497d7baed39064e17",
"flutter_music/.git/objects/59/33e1777b10d787fd5ff718d584a95e68d486f5": "832644cc405a46daf2c1f6882e5db231",
"flutter_music/.git/objects/5b/0191b63a432ed683f571250b9d7dd4e438c46d": "77176ceceb4f465e704f95b408de309f",
"flutter_music/.git/objects/5b/0a4f67b302d6ebdc1a8bb2cf7e7de1ce3f78ed": "37c4b5af1c89ed3f4d19d00c47e6a91f",
"flutter_music/.git/objects/5b/55de2cd2452069e3714ca8d181d0d0e94a0c10": "98c83550a1aba8db9de43b85b4bf121b",
"flutter_music/.git/objects/5d/399fed64726d401130d92845e5c8ff45b4c891": "1b59be7fd87bed2058c126dfda21fe26",
"flutter_music/.git/objects/5d/6cca5524e2130205ae9ba66736b5b514ddf704": "024943dfa240bfe7f324c8fcbb83cc89",
"flutter_music/.git/objects/5e/7641ba6d770920e0f4441f4aae53db053c608e": "81ca6adb2db23db2f9914abd099d1188",
"flutter_music/.git/objects/61/111e987477e79da040e9fd64b32b58fb3c5456": "47cf879e0821121e91d37dcf3419f907",
"flutter_music/.git/objects/61/86318eb8b9bb64813cddc805bd0bfa0c032b08": "042767d15beb553803f7762aa80b23ca",
"flutter_music/.git/objects/63/0dd0f672b31555b72be119490c89c620a0549d": "49fa8647f86ae0410148aee4904fdec2",
"flutter_music/.git/objects/63/713fedf687dabbd72bd9216ebe560a591021ad": "0d975501be0b59b7a8a3790f3d8c0180",
"flutter_music/.git/objects/65/2c38625633575a04ce27be2754592fc33c77e0": "ff219189d4eea1d12e6e29bae6fd7d9f",
"flutter_music/.git/objects/67/0d5915c362377547e28a1cae5ae96c781df9ff": "ed07dceef6aa628f9797e0d1fb6768f4",
"flutter_music/.git/objects/6a/18d91f6827ab548ac99b7a2b8ff5b48903a844": "7c2ae4dd5b89b6a00c95d31e0f95111e",
"flutter_music/.git/objects/6f/37138c0c85e127c3d701e69c230bef34a3400f": "aa49c7f365780552536c8fc87c55e35b",
"flutter_music/.git/objects/6f/def01a5d8624f41df0cee2fa172a4aa3bddad2": "9845fcceff9fe557c53730a5ae97fea9",
"flutter_music/.git/objects/71/1a2588c83723a20d687bbe3cbbc4f05087abd6": "c418860d1634c6db0bbc30cc424c7189",
"flutter_music/.git/objects/72/3e3804c9d5af4ccf4748e5ac56a9524106c95c": "80a0c850737994a64f3deebcce39efbe",
"flutter_music/.git/objects/72/95a48edc2e7350fcb550a620bcbcc1d9a68334": "e85888607b083c787006ba75a46cfec6",
"flutter_music/.git/objects/74/392e915188831960b60b08150a316320e71773": "71b297ba3aa82a8479b510d9d52eecf4",
"flutter_music/.git/objects/77/3e8f9d44080862e7c9b13ba32046c33a6ab610": "91b39f43217544b09e16e36184fa67e0",
"flutter_music/.git/objects/79/d419efd0fe567fd5143e8f050d34e4a92aa50e": "50627e41fcddb10006c8ce3132395f0d",
"flutter_music/.git/objects/7c/39aaed4b000706b4c69854a65eba062c0f3c33": "112e4e9a76c5242dec9f6e14f04c3806",
"flutter_music/.git/objects/7f/12e44d74a461822370e2192fc25a7287140569": "2c851e19f42684189c9cfe86833a00ed",
"flutter_music/.git/objects/80/945d51f36dd4f0f0a715b32489518433d142d5": "da8f9c873c0f08850ab1564ea1366145",
"flutter_music/.git/objects/81/7fb7189d69edf800e2f3b052954f80a164ddd9": "b9d8aeca4b7209c77defa125565dde58",
"flutter_music/.git/objects/81/df810920f97387b09031e92a8c093a003ef007": "3b48d14f5de43db6a24f64a2ef9f65b7",
"flutter_music/.git/objects/84/c36748c562f24bde003b6ef41bed6e7fd99c2a": "eaba6790d46ba72006a6b4c81b67374a",
"flutter_music/.git/objects/85/cdf4c89949e66d7350f201946c8aa44d9d34df": "e9432f171f54a682d67490d96826d13c",
"flutter_music/.git/objects/87/e9d75c6c745afd4a113f3b1ff67fc814fc87b3": "6781e4bff0f85b191a78bbbd2be0dcea",
"flutter_music/.git/objects/8a/89273fa12e7508502919c0d2d78642fbecc728": "f1dd9e67cd6f9e6aa20616e3e054d863",
"flutter_music/.git/objects/8a/98470878341ed2a2a21d2bc8a838b9531a59c5": "146f78f77438bc17c6f85a10fc65d085",
"flutter_music/.git/objects/8a/9d4761f5ca80a2765ead585206f3fcd1547d23": "8a3d41496673e892431be162a3ffcad0",
"flutter_music/.git/objects/8c/579bc371d6e6f0c5bd27f2ce25586a2245b4d9": "a1d3f08ea3b5cfed346ca46ebdf865df",
"flutter_music/.git/objects/91/0004e473e4a589be899935b321e84ea3a293ce": "187f7371bd006b322f1a26c3c1bc52c8",
"flutter_music/.git/objects/91/aef570149308c80bc7054c21a40d5ab86d243f": "16a01f0b76a87da1a248476d423a177b",
"flutter_music/.git/objects/94/1b18365358372c13e72cda0630d7b30c91b2e8": "8513b67417d84e68409f2ba1b7fb92fd",
"flutter_music/.git/objects/94/67b273bd0d380daf62aa12e9cdec8c6fb61c40": "85d7aa09b13932805ab3428ef61b1bca",
"flutter_music/.git/objects/94/c9d1f58244ff28f63f78dddee4439c92549c24": "7128f1fc0baa9e607670eea53402c7f3",
"flutter_music/.git/objects/95/9c60acdfd033c084ea44e477b54df0049333bf": "0156be1567c439114c5197932a076f6e",
"flutter_music/.git/objects/96/18d84bb7a9a73c0dc2ad4c14b8445be768ebb3": "0a32503308d9d2189c9dcb2cb8233be5",
"flutter_music/.git/objects/97/d6f3d304820c13e6043e05c6df1f26c947be0e": "7cacb394df66125c0c9cb54d321a1784",
"flutter_music/.git/objects/98/9e03f8bfc02ddd96e1f22492a675bd360999a4": "0c330ee1f5d27127f8336da9336bbdc3",
"flutter_music/.git/objects/9c/216c6af00404616dcf3f84da0329ddc696184e": "1a7ae268aea406bbf83030274cda5b0c",
"flutter_music/.git/objects/9c/30de13b17c307f983355f1546d9e486ca19b65": "db96a2af89b11bd18bb0322aed4c60d7",
"flutter_music/.git/objects/9c/b6d3ff4c98522eef20e8e3fb451cc968ccf06b": "a8125a6cc60a18bf947b267ab23120ec",
"flutter_music/.git/objects/9d/07c224d8c98b5f9c44c11c7ad686a9dbaceff4": "fa84aa17935c1a0a7ed0078165cd2897",
"flutter_music/.git/objects/9f/8322809041a7bdf2d8a2672031ff8a5f7e1abc": "09f1e65934481651d62dd8e48a24b228",
"flutter_music/.git/objects/a0/8432f9db812a74657e61aab19e9c2353607ad3": "a82db49ae257e1a27b37db94cb235322",
"flutter_music/.git/objects/a0/9c051182eace7da123d4c8111a6fc4d5c5bf28": "d904cd95de5bbdd96c6f46c69b30985f",
"flutter_music/.git/objects/a1/3dddf62ae16f7cb2e58c263595a8ca697b092f": "9980331ba904455f2f76dc1711157fd6",
"flutter_music/.git/objects/a4/c7fa5288c4b6694aeb2f684931f8cbd6c37eca": "d4e4b21b300d0c762c36d392c685bc2e",
"flutter_music/.git/objects/a6/af157d4b66c11b21ff7c4ff537de79d7cbc618": "8ebd057d7006703175aadbf2eb21be23",
"flutter_music/.git/objects/a6/ce9bc14a122c0051db15b462497a6933d47bfd": "f6f8328fa2a917280409f3c727bbb7d7",
"flutter_music/.git/objects/a7/4af56be0825109901b46d17381a71227dd3b70": "7222af61640c3e9096968e34d4492b0b",
"flutter_music/.git/objects/aa/603df85274bdd5452544174a2ecd3cc4e8ab19": "aae85378c29514fa3c92377d4231ced0",
"flutter_music/.git/objects/ab/968f35e9c16bebbd852e060af598e3d9f67883": "d27a67224f873bf4777300aa66a0a204",
"flutter_music/.git/objects/ac/ba2083b4d5cba3fd9da62b42bc4e577296ecb8": "a776a85b5ba28ae9d2824a88866125f9",
"flutter_music/.git/objects/ac/bc6d348585d6dc597a779204007f286e7cf37d": "48f8b9c36b108bdb4411261c1acc701f",
"flutter_music/.git/objects/af/6fedc04f1c47db6d6bec9167443b98aadcd80e": "7f1bab1cb3e17807ac415596eab3c8c4",
"flutter_music/.git/objects/b0/004e24e21476c86c94b3dcfe844e5b31d381d1": "cd57ef03a9eae9a7671090b52dd472f8",
"flutter_music/.git/objects/b2/5b6f5371a6d784b269512f544e12ad39d06107": "9779eafa26640d22e9b79d333e9229c6",
"flutter_music/.git/objects/b2/edff32ce25d80e37b320effebf4d9c8b5cdbc8": "1d9032b024a6a620e66b0a673ddc0957",
"flutter_music/.git/objects/b3/07977dc7273eb91e79ee5fca646ad6e276dc4d": "9dd649aa664ddac12b950b4b3f9cb0a3",
"flutter_music/.git/objects/b3/a80a378b5bddf5179a731b0777a97154eb7178": "4d1d042fb7a924e7112bcda20c6fc418",
"flutter_music/.git/objects/b8/6f1497e61f51bf0b7a01750a5d1412be6426ee": "8d377571a64193b62d8d0751bf38218f",
"flutter_music/.git/objects/b9/ea704d5f71cda80de58f35044a03707a03ac2d": "3128ed2c589f4e71b2872df4a3950270",
"flutter_music/.git/objects/ba/bf95f7e84c89ed218e5debbced1b49ce322f1f": "4aac06c13682bfe6c5bc07444618acf6",
"flutter_music/.git/objects/ba/d3b99c9e8ebc1985b1b4bdc0d56b0bdad464f8": "aedaac680290e49c6b2b9743d6787413",
"flutter_music/.git/objects/bc/96e9325ec7b560195f07b3d02e842a2d0b53fe": "0018fdc5584cc4c6c5eba7e41f44d041",
"flutter_music/.git/objects/bf/06b0fc623be56a662e20d37141be12663570a3": "2c448035ef3c08af53e6aaabc8467bed",
"flutter_music/.git/objects/bf/9cc5468e02c34554511f636bcc6c331ca3cc4e": "83e62437dc727aa4c4abf09cef368253",
"flutter_music/.git/objects/c0/50682324ec3a39b3d89f0568e54c4485673d5d": "5f4eaaa67603f37595dd98143371d961",
"flutter_music/.git/objects/c0/d803e226943a0db6e8ae826af664eec4c1636f": "6bbeb34d3bda09c4db329a3847623c7c",
"flutter_music/.git/objects/c0/e90efa208e041839d90f296f65e8d6dcc09df7": "c565ef13048af14d318af09d60c06efe",
"flutter_music/.git/objects/c3/f42589c7bbc2b097cba294aa607e582ea0cb40": "456d0e9674d0a84b8e263d2f8796fca5",
"flutter_music/.git/objects/c6/f55f394f3b9073e5f7c6d7a6c16de02327573b": "f9d7b28f79461deac9ab631f7cde945c",
"flutter_music/.git/objects/c9/60a91688fc0f429872182c67252687dccf1a7e": "6ee5619874bea4abfd686eb842c51064",
"flutter_music/.git/objects/cc/23912aa4aa103ac733bcbd0adb5484a9078d5b": "d8949698cd7253e7f9bc74371127f0ca",
"flutter_music/.git/objects/cc/83fc15198f568fa613e7c471a9c0a978a6a6db": "418a2bd01fb3b044fa6849915bab5ce3",
"flutter_music/.git/objects/d0/36a4fba67a2b362477b85d123fd8170596dcbb": "70bab23d56d76539008db9d350052d2c",
"flutter_music/.git/objects/d0/54a2050be4fccbd73a72e81dfa3abecb235af6": "89dd940bae5b8259b70e80359497366a",
"flutter_music/.git/objects/d6/a7c7e8dcc21a36433564fd641f7d3ec9efa147": "d518526f2b4aa4faed00d52200de0f2e",
"flutter_music/.git/objects/d7/61384ef3f9198e50bfc33a8bf901fd06642024": "966ffe96149d9c1c414070d8a2702316",
"flutter_music/.git/objects/da/bb3c69dfa090c17388adb4b5f6150a634294f6": "6fd2a4566cbb241000101d90d1b870a4",
"flutter_music/.git/objects/dd/1d0461fbc81b6791ad0c2eaf1ec1bf67e561ad": "8fd6d751238295c488b7de1aed97f0d3",
"flutter_music/.git/objects/de/b6f000d4dcfa028bdc573f09e7aa137f624f64": "d476f30221862e87a87bd8938fa007af",
"flutter_music/.git/objects/e0/06f08696c096015da19e8325d56d2802289972": "c8fa87eeab2ab190cbdb41950f17d41b",
"flutter_music/.git/objects/e1/19be37eebc88befb2342b5db1b9bf51568f8a0": "eb9dfdd11b9f0f9f4e98b9db378f2ee3",
"flutter_music/.git/objects/e1/3af2477be3d28075f8f23801560ab973c98186": "9e64cd66fbeb890e5d3aefd01c7e0090",
"flutter_music/.git/objects/e1/61f10e66e3ffe1b1a77e41ac84ab78cf70b62f": "8317c213f6cc1b2d7403cdc5f7b3a53e",
"flutter_music/.git/objects/e6/b7cd3ea0a04e6a98d2862321e71ea0ecfdba9d": "44e0fe3630b05b4e06b88b5f6fd555e6",
"flutter_music/.git/objects/e7/8d6a59e6043a8844decf19d5782e5d5d3d7f60": "568a6030486b28eef993081164cda45a",
"flutter_music/.git/objects/e8/4cf465288a76f0a207e19737b33b808927af3a": "964d32bbf40e42af76d2ade6987598c3",
"flutter_music/.git/objects/ea/e343b9da9f3ee9fb2c009940841215b5961c70": "f3127ed1208fa7ca8059c5d647de92c9",
"flutter_music/.git/objects/eb/c4697c7745b37904319f5a2a07802558de3a4e": "bd701376d014c0cf3c999eb9cfc52d3a",
"flutter_music/.git/objects/ec/6a98ba53da2767b55f4bc489f3035426b71a59": "e095c480f59ddcb51f52dc113ca738c7",
"flutter_music/.git/objects/ec/fcc2e0f21c82d73cdad1cf58d5fdd4292673b0": "4dd6a30d6b2cf66f7ca0ddf31d799f6e",
"flutter_music/.git/objects/ef/3d46dd6ca9b0024541b2f643cbe871f343230e": "371de1f228469c533e4d3dccbc650c36",
"flutter_music/.git/objects/ef/76c0039b451cdac79422b3c02b18be863239c8": "ff74c08e8e629d6809b0dbd048ae2db7",
"flutter_music/.git/objects/f0/7468e5a59d812f768cb5a8c22fdc577008c620": "461a6b0ecb6c7905e815c8093ba98879",
"flutter_music/.git/objects/f3/5cdc2f922c3bceb6a63f00e6a9095111b58400": "276ef8835d105b0afe2d7b2eff7b6363",
"flutter_music/.git/objects/f3/b8a3185cfa7b2b98785c117dfe8d93a2a14e00": "95344db307deba6e2ab8cc5fb79c1978",
"flutter_music/.git/objects/f4/314103c9f8369a3c3f7b4d5a46b76247ea1134": "f4ef9deae99270f5e90924ca61bd2801",
"flutter_music/.git/objects/f5/cf0e61856f449412eb7d0fe1f94de5ff3b356c": "04b5dc0e6daa8acf443bd9d52cd31338",
"flutter_music/.git/objects/f6/7467baf7a84b4a572b8a2b88a9176488944b04": "3050a8bc60cfb4cb46cc507d5e496581",
"flutter_music/.git/objects/f7/37518cdceca0f1d40042291ad75e0ee76e05f8": "e79471c09eaf2aa584a08e3b1d8ae7fd",
"flutter_music/.git/objects/f7/d561909c092bdee75d7f194a2533310345201d": "fb2c8da5632c742394c09d919e7d6cf1",
"flutter_music/.git/objects/f9/dc51190ff7a866673b845e18eec9bbc07cff84": "c2ba3b918c19b130d5957dd37c52a4a5",
"flutter_music/.git/objects/fd/4645b4dedcae877038822c72ae21a615ce4531": "91ecf412be3432c1d21c4d396587b3fc",
"flutter_music/.git/objects/fd/69b0a011dd21ac6848028ec7da57f3a006f2a9": "9a1812924361e4ac0374db74fe6ce0a8",
"flutter_music/.git/objects/fd/d178160995aa726b7fcc81e9ddc3efe3fba502": "e6d7e177a57f05c46fe94353095e1af5",
"flutter_music/.git/objects/fe/7cf90fb3ae0e87eb13cdbefcb0dde3e09f4efc": "7b7b6771f383d1fa50aee6153a065c50",
"flutter_music/.git/objects/fe/add029c7d284df68e7274273ce2032b3f11edf": "907bbf1dc98b297eb82baf492dbd9998",
"flutter_music/.git/objects/pack/pack-25a869faa7fee32e794361f7a2367b13a3093dd2.idx": "f02eb1f42e4b677c4ab8cbd3dc5484c9",
"flutter_music/.git/objects/pack/pack-25a869faa7fee32e794361f7a2367b13a3093dd2.pack": "44575e8f843b0f1b7919e37dc06d477a",
"flutter_music/.git/packed-refs": "a78421464f5a20ff5d22544ba58ee761",
"flutter_music/.git/refs/heads/main": "499e0040e7c0409047af89eda3a662fb",
"flutter_music/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"flutter_music/.git/refs/remotes/origin/main": "499e0040e7c0409047af89eda3a662fb",
"flutter_music/assets/AssetManifest.json": "4568757cfa0224d629b9faee05418e81",
"flutter_music/assets/assets/images/cover-bg-in.png": "aa13f1c1f54808584ee3aaaa7477ceb2",
"flutter_music/assets/assets/images/loading.png": "b5079f33bd7a1edf602089f50415d114",
"flutter_music/assets/assets/images/needle.png": "e5e615d8a23e2a8cb56ed6de71d62bae",
"flutter_music/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"flutter_music/assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"flutter_music/assets/NOTICES": "bbc66a04bb13b78befd430fd1db0b32e",
"flutter_music/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"flutter_music/assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"flutter_music/assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"flutter_music/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter_music/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"flutter_music/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"flutter_music/index.html": "15fd8b733c925e363f5f20905ec66271",
"/": "f9f932b6b140f9426edaef8132d0860f",
"flutter_music/main.dart.js": "050a3fb6b6a4cefd48b7a8c92cd56ac2",
"flutter_music/manifest.json": "5aa66876af381f11d4f82f95d37bb1e3",
"flutter_music/README.md": "131f5f23e65e7e797b08444313d5f1ba",
"flutter_music/version.json": "53bf1e8de662d958f4b7721653a88dce",
"gitee_music/.git/COMMIT_EDITMSG": "d5c3be52364c3fed8fd49ae1b9034ce4",
"gitee_music/.git/config": "4748976379a23f9405de3b468b4e0c47",
"gitee_music/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"gitee_music/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"gitee_music/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"gitee_music/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"gitee_music/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"gitee_music/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"gitee_music/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"gitee_music/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"gitee_music/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"gitee_music/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"gitee_music/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"gitee_music/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"gitee_music/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"gitee_music/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"gitee_music/.git/index": "ca80f192a5e522f33428a7369fcaea16",
"gitee_music/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"gitee_music/.git/logs/HEAD": "6fd0dfc6e861add9c2f73c9346c6167b",
"gitee_music/.git/logs/refs/heads/master": "6fd0dfc6e861add9c2f73c9346c6167b",
"gitee_music/.git/objects/04/205db8e57bf492021f890f494e30cb5b094d72": "dd0c891bc73cc912f6f2b292ff02850c",
"gitee_music/.git/objects/10/b36df94da489b0839ea91e0dbf1d6aee64bbd5": "ab2e57f46dc19ce96041adee2573ea5b",
"gitee_music/.git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
"gitee_music/.git/objects/1c/37fff22e29e1ef751a47398913985c702564bc": "d29adb73147c676f7bd7c313eac2f8a3",
"gitee_music/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"gitee_music/.git/objects/21/823db3416dfa715cb4ea01c6ebe1430ec4712e": "7601af5d2a8e6ddbdc1046978fd09444",
"gitee_music/.git/objects/27/9535675fd734972c896e88cb801fc3230f4a73": "20ea0ec15285119487b89b827d623844",
"gitee_music/.git/objects/2b/5dceae86cb58c13806d99d1813601861eacc92": "5b201c5473bc98712f038c42232587e4",
"gitee_music/.git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
"gitee_music/.git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
"gitee_music/.git/objects/34/e2f7630b3d4646be646954043c67bcf0e0a6b4": "a98391747356027ef2ecf36f231e95ba",
"gitee_music/.git/objects/34/f6a5bdce8fd03e908493e67975bdde7b8095db": "cb9f14a2cdfc945aa028cf1aefbfbaf8",
"gitee_music/.git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
"gitee_music/.git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
"gitee_music/.git/objects/49/b9dde033c872b94f8e39e984eff3c2783888c7": "f877cf951c7f5495ca24a38d78094f8e",
"gitee_music/.git/objects/63/0dd0f672b31555b72be119490c89c620a0549d": "49fa8647f86ae0410148aee4904fdec2",
"gitee_music/.git/objects/64/61d1baa9d16aed5a2ed3a1da6e3a5f9dd200db": "569cb3c50d8a5a63680349483531478f",
"gitee_music/.git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
"gitee_music/.git/objects/67/b83c04c436eefae6885b90afd3bd27d08367c0": "a877babb6d362147cee8d55dc8475705",
"gitee_music/.git/objects/6d/c2ba161ca1ad56098356f0a0c938c841eeaaf8": "cc4e05b7be786b8ccaee6e38cc0cb36f",
"gitee_music/.git/objects/71/1a2588c83723a20d687bbe3cbbc4f05087abd6": "c418860d1634c6db0bbc30cc424c7189",
"gitee_music/.git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
"gitee_music/.git/objects/7a/ff706f978e95d4d74e3e02aa047b22915f00e9": "4e06e9438a3aa9e3f3ce89ead1b462ce",
"gitee_music/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"gitee_music/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"gitee_music/.git/objects/8b/137891791fe96927ad78e64b0aad7bded08bdc": "9abb042e8c58ed4d703beb8e66b37150",
"gitee_music/.git/objects/94/1b18365358372c13e72cda0630d7b30c91b2e8": "8513b67417d84e68409f2ba1b7fb92fd",
"gitee_music/.git/objects/98/9e03f8bfc02ddd96e1f22492a675bd360999a4": "0c330ee1f5d27127f8336da9336bbdc3",
"gitee_music/.git/objects/a0/8432f9db812a74657e61aab19e9c2353607ad3": "a82db49ae257e1a27b37db94cb235322",
"gitee_music/.git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
"gitee_music/.git/objects/a4/d92b9990750695fa4ba26a8d96e7e536978715": "d164d4234a4f58f12c58f04b3ce806fa",
"gitee_music/.git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
"gitee_music/.git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
"gitee_music/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"gitee_music/.git/objects/b8/6f1497e61f51bf0b7a01750a5d1412be6426ee": "8d377571a64193b62d8d0751bf38218f",
"gitee_music/.git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
"gitee_music/.git/objects/f7/37518cdceca0f1d40042291ad75e0ee76e05f8": "e79471c09eaf2aa584a08e3b1d8ae7fd",
"gitee_music/.git/refs/heads/master": "4c7f67fafbba1bbb7ec69fc4bec84494",
"gitee_music/assets/AssetManifest.json": "4568757cfa0224d629b9faee05418e81",
"gitee_music/assets/assets/images/cover-bg-in.png": "aa13f1c1f54808584ee3aaaa7477ceb2",
"gitee_music/assets/assets/images/loading.png": "b5079f33bd7a1edf602089f50415d114",
"gitee_music/assets/assets/images/needle.png": "e5e615d8a23e2a8cb56ed6de71d62bae",
"gitee_music/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"gitee_music/assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"gitee_music/assets/NOTICES": "27b2925dbbee2102ec4f88b63487f442",
"gitee_music/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"gitee_music/assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"gitee_music/assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"gitee_music/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"gitee_music/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"gitee_music/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"gitee_music/index.html": "9eee1c4690990125f1fa7705f61c171d",
"gitee_music/main.dart.js": "697c2bbc864fb27108beee3cd75cad30",
"gitee_music/manifest.json": "5aa66876af381f11d4f82f95d37bb1e3",
"gitee_music/README.md": "131f5f23e65e7e797b08444313d5f1ba",
"gitee_music/version.json": "53bf1e8de662d958f4b7721653a88dce",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "f9f932b6b140f9426edaef8132d0860f",
"main.dart.js": "76a480fa0d41441d5de8c98b2536e2ca",
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
