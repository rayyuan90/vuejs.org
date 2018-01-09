/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2014/03/22/vuejs-010-release/index.html","fbda2db9f13d8d65835b77989a208b05"],["/2014/07/29/vue-next/index.html","02df7d42585c11a17b913ea0efa81680"],["/2014/11/09/vue-011-release/index.html","3c052c227557e9df695c860029a43b35"],["/2014/12/08/011-component/index.html","0a80390d41a5aeab89cd7bb2de95741f"],["/2015/06/11/012-release/index.html","0725cb76c2cbed7aa820a217bc3c7cdc"],["/2015/10/26/1.0.0-release/index.html","ed8a0eac73e36bf05c9f285d3d249028"],["/2015/10/28/why-no-template-url/index.html","a693c6f28d4920c182d90659a9206255"],["/2015/12/28/vue-cli/index.html","04d9b0b9a31b867950ed0a349ff562bd"],["/2016/02/06/common-gotchas/index.html","3411d373dfcb4b8f73cf6719d41de7d6"],["/2016/03/14/march-update/index.html","82098c9f649bf0788096f11a281d2f54"],["/2016/04/27/announcing-2.0/index.html","8e9ae4f2680952b59b4f036ec865c902"],["/about/index.html","4b642aa38d25f301225f13714365d4fb"],["/api/index.html","176a72f4aaa42c3b6a404d370e87fbb8"],["/archives/2014/03/index.html","07d1ade8e33f2dd97eaf102aad384807"],["/archives/2014/07/index.html","947d1a9ba8dc86619c4595768ccf04f8"],["/archives/2014/11/index.html","b105b4ce22fb06dd7961237e633cf5db"],["/archives/2014/12/index.html","64e847b81feec047a6c079ba9ec71141"],["/archives/2014/index.html","5099665bf96ef1bcc3e7489c9261441a"],["/archives/2015/06/index.html","365f140c1fdb2a588649d3a592587769"],["/archives/2015/10/index.html","1ea2c4ed0c389b08efd7a9cf57a721aa"],["/archives/2015/12/index.html","64140e9393a6dbdf1674ee532305bea6"],["/archives/2015/index.html","34904d8684d1cb548b7a921b4ada9730"],["/archives/2016/02/index.html","6c7dc276b150bea4bea0dca2c7b80b76"],["/archives/2016/03/index.html","484393af64282e9703a23c1dd313f769"],["/archives/2016/04/index.html","957d3f7f60873b9f24965ff02ecf9cec"],["/archives/2016/index.html","cf83250abe4280d7f754cfa2c40bb484"],["/archives/index.html","a0a8c723633b61c47a45d34a2e426965"],["/archives/page/2/index.html","e1e715539d29938be411750b5d20cf7b"],["/css/benchmark.css","b083e0006589a5ba88a250eb8ee12cc5"],["/css/index.css","205e1c25d4db18853cc1750720834877"],["/css/page.css","24206463fa96eb3745025d1f653f1f89"],["/css/search.css","e4e6c1e2a49dfe73bd8f10ca3409c040"],["/examples/commits.html","3cd3b2db40187e7f2d236473bae9ce59"],["/examples/elastic-header.html","198f4c19911bf30785905adb996ef899"],["/examples/firebase.html","266080b80e262a2b93289d466d1337b5"],["/examples/grid-component.html","3119ba25bb6b9dcc2f40d3f60e2136df"],["/examples/hackernews.html","f793aeb8d340c60945b0a58f3afa25c9"],["/examples/index.html","dc91b34e726c12318c4d083a3090c156"],["/examples/modal.html","88b6a98ec8a44cd783eaf0d71fcf46a7"],["/examples/select2.html","b812ad3b215af513c979c0d9759fe5c9"],["/examples/svg.html","0a1876c72d22212d243ed8c2d5b0404e"],["/examples/todomvc.html","a048618225f78a66ff322bb1dde98a37"],["/examples/tree-view.html","4815e09c4b3af4132da0e95dc1fbc945"],["/guide/class-and-style.html","a3174f2083dd58fbd1aa965dcc98133f"],["/guide/comparison.html","7c06634379b01b8e7ef0dfc90b9b8517"],["/guide/components.html","d98663b0d45a91f0a40541c1efe2bbfc"],["/guide/computed.html","3fcf408c7cdfd856ea75b6a5562ba8aa"],["/guide/conditional.html","896e19e7955f2616eb31ab4d8c65178c"],["/guide/custom-directive.html","697987fdd04783febdbff2aa2932c41d"],["/guide/deployment.html","be96515c673712671d042337366ddf63"],["/guide/events.html","0ebaec88003f2e1ab59ff868764d961a"],["/guide/forms.html","09ead2d35e42cdd09d848b27ec357491"],["/guide/index.html","e3171c7c94b236d5caa91894d8fdd581"],["/guide/installation.html","8acd1ab4fbaa082958259bf3a22d7b22"],["/guide/instance.html","61021765831307e8278d034c23502dd6"],["/guide/join.html","f2287c54050c9b576ed05af7baf6af73"],["/guide/list.html","772e05d65b4587501785906a4b681efd"],["/guide/migration-vue-router.html","e0d8a3e2dc09e2bda939c23c1e967765"],["/guide/migration-vuex.html","9b8659c8a4506acd24f2c0e3bee160f3"],["/guide/migration.html","af37d4bfb217e88a7f02eb92c446497f"],["/guide/mixins.html","270f751a44e1d1e18b9a31406a34fe8b"],["/guide/plugins.html","40467c9724e4917ae32582ac543db41b"],["/guide/reactivity.html","5b1e83c4a12b5f3e687e89e0a0b1ef05"],["/guide/render-function.html","4139dd80783f9eecb92d57dcf23dc54d"],["/guide/routing.html","f7f89a93550ee84e925ed84d6912a650"],["/guide/single-file-components.html","095eb3d7152439579d7a56227fe273f4"],["/guide/ssr.html","9143accd02c56349a3ec40d79eeefb4d"],["/guide/state-management.html","81ea6d4aee3ef538b507e4a5a0c3e3a0"],["/guide/syntax.html","611a256a910e0d1adfd5b418535e0ac1"],["/guide/transitioning-state.html","3f36248a3d9f6f21f10725f15775c5d6"],["/guide/transitions.html","4513c62165ee217697830a40e1795365"],["/guide/unit-testing.html","0f69c6b7a8d743af6384b8a2208b9a33"],["/images/100offer.png","5fc04cb5266c2171ce5cc68ca6be8ea4"],["/images/2mhost.png","4b8d618675f5ae2e25873930e0f1a33b"],["/images/actualize.png","caed3eca0208a349140a95b354d07382"],["/images/anymod.png","f85debec44ea29dd53d2e4f19eb889b4"],["/images/chaitin.png","2e90c7e1644d533624b59194544aab8b"],["/images/check.png","1ab55a9d7d368f9e185314b4ee3e108a"],["/images/coin-bch.png","e9634e36f11c3f176b39b58e0820d049"],["/images/coin-btc.png","8047fc21916eb3615d0a4efe57f1c432"],["/images/coin-eth.png","cd0db0d4bc0a7bdd0663f4d01bdf1afd"],["/images/coin-ltc.png","933d3713c8ac395d46df6cc4557a63e6"],["/images/components.png","7769fd61a903797e4273c74888ed8b9b"],["/images/conf.png","122b20796747d08484fc2cdfefcba97a"],["/images/data.png","2fdee1ad51c9b990ca186769cbc92dc4"],["/images/dom-tree.png","7ed63c53d0fe7e8e1c0a74332f6eb775"],["/images/down.png","39cee69a29f44c5ae8acacf0c7c0c9fe"],["/images/famebroker.png","50c05f70a13a6ccf44ebc50d6b97263c"],["/images/feed.png","fc48422363785bd7645699a57c9c9660"],["/images/frontend-love.png","13f1e90195ff2a1fa94aee3f84b79121"],["/images/frontend-meetups.png","4d67ea5944cde49c38173b904fff492b"],["/images/hn-architecture.png","2414356400811f80a25178bad519927e"],["/images/hn.png","907b2c671bfe609f3bbf7b4e51480c0b"],["/images/htmlburger.png","3c838f6dbddb1361e6019f521578171f"],["/images/icons.png","24c9ea5274c732f8ec0ee13fb2361313"],["/images/icons/android-icon-144x144.png","42d2c151cc101a4c42ac51bd96c8b24d"],["/images/icons/android-icon-192x192.png","ad7d1af025254f7fb6c45917d26c0486"],["/images/icons/android-icon-36x36.png","005fffcd0a3cce3dacf8856645501213"],["/images/icons/android-icon-48x48.png","e898ac737b264364a216e2007b1fd7da"],["/images/icons/android-icon-72x72.png","ad659ec7e8eae4a50b73145c69772d42"],["/images/icons/android-icon-96x96.png","90c13bf806fb3b3749ef1f60cc5dc34c"],["/images/icons/apple-icon-114x114.png","69c4653429d7ac74ef8b968ad0676a19"],["/images/icons/apple-icon-120x120.png","3bb7b09526b130a7713f247e7db6b835"],["/images/icons/apple-icon-144x144.png","42d2c151cc101a4c42ac51bd96c8b24d"],["/images/icons/apple-icon-152x152.png","6f0e515bd57131a7e9c584c0a99492c6"],["/images/icons/apple-icon-180x180.png","91bc1dd313b750413e8e54349d2d7feb"],["/images/icons/apple-icon-57x57.png","d322b29db86a269ca682d6d54450a6d1"],["/images/icons/apple-icon-60x60.png","99b633995d668a30d869843d322cb2d5"],["/images/icons/apple-icon-72x72.png","ad659ec7e8eae4a50b73145c69772d42"],["/images/icons/apple-icon-76x76.png","293bd080883b88e811ec54fd1d17f04c"],["/images/icons/apple-icon-precomposed.png","8366f4f77f84f5945d37c8b6b5e85466"],["/images/icons/apple-icon.png","8366f4f77f84f5945d37c8b6b5e85466"],["/images/icons/favicon-16x16.png","b0fb918340bdb38c3f82934c3b83da28"],["/images/icons/favicon-32x32.png","495a42102231b5a1e1999b969fe59ca9"],["/images/icons/favicon-96x96.png","90c13bf806fb3b3749ef1f60cc5dc34c"],["/images/icons/ms-icon-144x144.png","42d2c151cc101a4c42ac51bd96c8b24d"],["/images/icons/ms-icon-150x150.png","81b31836aa22a0861e979c3f798c2257"],["/images/icons/ms-icon-310x310.png","dc00a74758f465cf5545d759a7fc26fc"],["/images/icons/ms-icon-70x70.png","e20d096831d0fe142137fb69fd7c5915"],["/images/infinitynewtab.png","1137f7c599e5f5ff6a4bc393a7bb3b3a"],["/images/itunescn.png","ca4a777f3e67fda2fc0c703e5a0f3845"],["/images/jsfiddle.png","cdaaf61398b8ccde5fbfb28daab02dc2"],["/images/juejin.png","f8a801162a92753a9f69ee528ea72d81"],["/images/laravel.png","854ba2a1472cff4b73bbb98cc2bf6e74"],["/images/lifecycle.png","1d3dae65499d59846dfbfaaa7daae963"],["/images/logged-proxied-data.png","72b84d29d68b46cb4772b225aaf581e9"],["/images/logo.png","c2a605fbc0e687b2e1b4b90a7c445cdd"],["/images/menu.png","f97c6cafce76896f725f56d22c33dc5d"],["/images/monterail.png","a1b2c43f5834a30140acf56a56ee3d7e"],["/images/mvvm.png","9ef4a737380c1e72d3c1a5fae8480533"],["/images/onsen-ui.png","c9c5c8fc38c7121ca4d5b83438d1ce9e"],["/images/patreon.png","c55a20c3dface37cde7d1534e243c9fe"],["/images/paypal.png","70c8748866c09556ef5abb1a32496f25"],["/images/props-events.png","a18498cd0176946ccee943d2fec4f420"],["/images/search.png","57bde6918157195ab105e3c5d0967dec"],["/images/someline.png","2e05b0cfb1eaa734666dab9e5f92cea1"],["/images/state.png","ca9bd676c6d66f5f0797ec6ad35eb2b4"],["/images/stdlib.png","0c3292d4d501cfb819cf38e8324d9220"],["/images/strikingly.png","c220cba956cba87d47c972340ef872d1"],["/images/tde.png","dfd1f4c2d07907d379fc26e890827f14"],["/images/tmvuejs2.png","260af8aecb932915b0aff029550a80a4"],["/images/tooltwist.png","52e2b2bb7c5278b564bf30ffaca782b1"],["/images/transition.png","ca34aef3910abf105dc112aa23026d54"],["/images/typescript-type-error.png","ac1a1aa8c51a40565dc603917925a14e"],["/images/umoon.png","844f09da5ca82b56a1824b68591cff16"],["/images/upyun-large.png","cd66170a5022b5c9444119e3fa5cb83a"],["/images/upyun-main-2.jpg","f388a2ba0e0b004e15a7684485fff486"],["/images/upyun-main-3.jpg","e618981c7f191cd1fd84905e03538f47"],["/images/upyun-main.jpg","1c36d062540e5d97a2ca993776fb7016"],["/images/upyun-small.png","7a42625327e1495cec13cbe25c7a200d"],["/images/vue-component-with-preprocessors.png","f1bdf44c793758fc8576724406014986"],["/images/vue-component.png","91752852891f91a4afd27d95bb00b22d"],["/images/vuejobs.png","e050f9a94eb0f893093529fcce61d707"],["/images/vuejobs.svg","c31e68ce1f2663afbe9655c368c6dd35"],["/images/vuejsadmin.png","dd05607d35642239837fff531f3c4a09"],["/images/vuetify.png","40e87e078618e137638baebe188029ad"],["/images/xfive.png","016402e334a83e4af9ff0958d39a7b0e"],["/index.html","76a7694dda11dde83aa3dd68f4ad0e34"],["/js/common.js","d752779afb9452281fda4a9454a861e6"],["/js/css.escape.js","fe4db48c9e3f272a6d12cf1312de889e"],["/js/smooth-scroll.min.js","53a7fcc785e987d5ed08302f36de6653"],["/js/vue.js","440e570c372631aa20b9c778ad9e7273"],["/js/vue.min.js","9cfa1585246355bf21ba3980f5843cdb"],["/js/vuefe-min.fe7c4b3c46a9ec32c769.js","679ef4b54f690beffb8558fa255a3602"],["/js/vuefe.js","22207a432bbe9b1fbf998e24191cc27b"],["/menu/index.html","66cfa784541f14235a2bbcfbb1fdb67d"],["/page/2/index.html","f7dd74d37d1f2e5e64f81f1c35e3279b"],["/support-vuejs/index.html","2448615cfd93bce3fecdb3eae57f6572"],["/v2/api/index.html","68a54b609904ab1c02dfcce3e057d2d4"],["/v2/cookbook/adding-instance-properties.html","f2b2f19775cdc2eabb32099a11c90a0a"],["/v2/cookbook/cookbook-contributions.html","469cabe871706a91935e1d10eca1fb1f"],["/v2/cookbook/index.html","c2269f756d9008d09676dc6bfd8ea348"],["/v2/examples/commits.html","07e9e67cbeec796bfe571edb3c1e87a7"],["/v2/examples/deepstream.html","341ed4f3b6d83aa0143134cd61c9f902"],["/v2/examples/elastic-header.html","a7cf54d1151524a3eed5d3304d6c9fc9"],["/v2/examples/firebase.html","0b4486d0ca6438ddaacdd3929506af52"],["/v2/examples/grid-component.html","df79429f8d534dac2be3b5a276ddf160"],["/v2/examples/hackernews.html","88e1c590cfd5ac1a87beb761b6aa9e6b"],["/v2/examples/index.html","111bc43d8494d5a51007b61ee581c8c3"],["/v2/examples/modal.html","3cd859e37602b9fe809499832bd4c9ce"],["/v2/examples/select2.html","12341f7cb08c0aa9b572fd1e19d852a8"],["/v2/examples/svg.html","0d70af73f4f0e8b21eff890a5dd452a0"],["/v2/examples/todomvc.html","e30d980c2e7a8d18ad0046587a485b72"],["/v2/examples/tree-view.html","78e4be574ffa0483e22df18cc9037e59"],["/v2/guide/class-and-style.html","a52db3ab0554dbaa9c2a4e2972a7a991"],["/v2/guide/comparison.html","2c6fe7041651f4b0a235757b1415a7d3"],["/v2/guide/components.html","97c2a2c967b432c9b8f60c3b02d887c9"],["/v2/guide/computed.html","868c2ce50f0e3f7de969e4341063b253"],["/v2/guide/conditional.html","efa9339c351c1c8eb75ad1c7b502b827"],["/v2/guide/custom-directive.html","14df515089478b0952579cbbd0d53788"],["/v2/guide/deployment.html","1baec17f851a1171cb7dea54a54ce74c"],["/v2/guide/events.html","b94516def2af67446072a0f1c6b8f116"],["/v2/guide/filters.html","e3d45fb7f776608679eabfd75bda3fc2"],["/v2/guide/forms.html","30eab4f5edb0a489b911b1525f7f698c"],["/v2/guide/index.html","1053a375d74b551054e1c2a483fa0060"],["/v2/guide/installation.html","37680322912c2d6902b5208fbe3d3635"],["/v2/guide/instance.html","6c2c81d12e1ea10827562ec7cadff1a1"],["/v2/guide/join.html","662e0efe804e05ec3fdbc3ca5329d004"],["/v2/guide/list.html","999196205276656946dd5744a4e08159"],["/v2/guide/migration-vue-router.html","51e078121b4ebea84dd215c92a18faef"],["/v2/guide/migration-vuex.html","f66e2e7e915d37ec3511520ccf2ad222"],["/v2/guide/migration.html","0adc5da5bff6a774754154ed7036f3c2"],["/v2/guide/mixins.html","90b1295c9a2698540014bdc9f4c513ea"],["/v2/guide/plugins.html","7787a7d45f091c4d764f2f3fb794e957"],["/v2/guide/reactivity.html","003c6d79c0e0e3beed7a3e9b5978ff22"],["/v2/guide/render-function.html","e7c34607c4850605256153b0aa74dbcf"],["/v2/guide/routing.html","cc04186c5c88be01daadb1917b530c1b"],["/v2/guide/single-file-components.html","52fbfec69b65f3445be7adae13ee6bc2"],["/v2/guide/ssr.html","c4e10688fe3ee6bc6c84c5399a4e8c56"],["/v2/guide/state-management.html","2e76c40b3340efefba76a5b1be765fc7"],["/v2/guide/syntax.html","0c02e7802438b9c350006c1660c4cef3"],["/v2/guide/team.html","21579e80a01245d88273fdefcfea4484"],["/v2/guide/transitioning-state.html","27a9f7d8ed09829c91556895028ad833"],["/v2/guide/transitions.html","8584a3b6ecc1ca352caa07852c78407e"],["/v2/guide/typescript.html","b5f3ccb3d4d5849312de5276ac1fd934"],["/v2/guide/unit-testing.html","ecb9b75c36405037d9583689b9d97813"],["/v2/style-guide/index.html","5da64cc00ced1508cf52dfe26c6abc98"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







