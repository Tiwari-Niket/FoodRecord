if(!self.define){let e,s={};const t=(t,a)=>(t=new URL(t+".js",a).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(a,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>t(e,i),o={module:{uri:i},exports:c,require:r};s[i]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(n(...e),c)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"8558d2bac33251a4d50d634efc89e4da"},{url:"/_next/static/1afCw8ZtLt8KIUGzvQV2m/_buildManifest.js",revision:"02b926c0e0d93f81521380ea4167e5c8"},{url:"/_next/static/1afCw8ZtLt8KIUGzvQV2m/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/29-a3511cfee833b676.js",revision:"1afCw8ZtLt8KIUGzvQV2m"},{url:"/_next/static/chunks/698-4db23ab236dedcbb.js",revision:"1afCw8ZtLt8KIUGzvQV2m"},{url:"/_next/static/chunks/95-4f31c1279dd4075a.js",revision:"1afCw8ZtLt8KIUGzvQV2m"},{url:"/_next/static/chunks/app/department/%5Bid%5D/order/new/page-f1b96515fc3c469d.js",revision:"1afCw8ZtLt8KIUGzvQV2m"},{url:"/_next/static/chunks/app/department/%5Bid%5D/order/page-e52dd560a41f661f.js",revision:"1afCw8ZtLt8KIUGzvQV2m"},{url:"/_next/static/chunks/app/department/%5Bid%5D/order/view_order/page-e3129e9ec3fd4fc9.js",revision:"1afCw8ZtLt8KIUGzvQV2m"},{url:"/_next/static/chunks/app/department/page-d6d5fa93fbe0d6d0.js",revision:"1afCw8ZtLt8KIUGzvQV2m"},{url:"/_next/static/chunks/app/food/page-f8298047bfa15550.js",revision:"1afCw8ZtLt8KIUGzvQV2m"},{url:"/_next/static/chunks/app/layout-5bf776e4ec60eed4.js",revision:"1afCw8ZtLt8KIUGzvQV2m"},{url:"/_next/static/chunks/app/page-a94f3732a5a854b2.js",revision:"1afCw8ZtLt8KIUGzvQV2m"},{url:"/_next/static/chunks/bce60fc1-97c6f64f33809f3b.js",revision:"1afCw8ZtLt8KIUGzvQV2m"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"1afCw8ZtLt8KIUGzvQV2m"},{url:"/_next/static/chunks/main-045dc33a5ba03f04.js",revision:"1afCw8ZtLt8KIUGzvQV2m"},{url:"/_next/static/chunks/main-app-6b9bcaa12c8679cc.js",revision:"1afCw8ZtLt8KIUGzvQV2m"},{url:"/_next/static/chunks/pages/_app-b75b9482ff6ea491.js",revision:"1afCw8ZtLt8KIUGzvQV2m"},{url:"/_next/static/chunks/pages/_error-7fafba9435aeb6bc.js",revision:"1afCw8ZtLt8KIUGzvQV2m"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-e63a25b1b0218ce7.js",revision:"1afCw8ZtLt8KIUGzvQV2m"},{url:"/_next/static/css/2986d81c47f11995.css",revision:"2986d81c47f11995"},{url:"/assets/back.png",revision:"cfb5b067658032fd1870f734369d041b"},{url:"/assets/delete.png",revision:"94fe9f2bc1c059f27df2bbb19bb708e9"},{url:"/assets/grid.svg",revision:"7d51f8d19b776cd0ad926a15d41f3894"},{url:"/assets/logo.png",revision:"b11b05c901080024d150e9155e7bc6a9"},{url:"/assets/plus.png",revision:"898cbc8ff1ba17ff338e08bcde8d4bf2"},{url:"/assets/reload.png",revision:"8e611787814128be3f0e0a3d622ee7d9"},{url:"/icons/icon-192x192.png",revision:"5df6bb4e26181d96f2970347ce6a051a"},{url:"/icons/icon-256x256.png",revision:"fbb2e12159a79f365101c4136b5a7f5f"},{url:"/icons/icon-384x384.png",revision:"9d33f306b36b2eb1e4f2412d15eeb6aa"},{url:"/icons/icon-512x512.png",revision:"a83cecd8a3dfa1201044bdba51e62aec"},{url:"/manifest.json",revision:"a30b25c61a278fd81cea8daab3cac0e6"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:t,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
