if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>a(e,t),o={module:{uri:t},exports:c,require:r};s[t]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"b0695c510e7d788a9d777741166cc0d3"},{url:"/_next/static/amXpKQhyOUROw_kYNGKUi/_buildManifest.js",revision:"02b926c0e0d93f81521380ea4167e5c8"},{url:"/_next/static/amXpKQhyOUROw_kYNGKUi/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/29-a3511cfee833b676.js",revision:"amXpKQhyOUROw_kYNGKUi"},{url:"/_next/static/chunks/698-4db23ab236dedcbb.js",revision:"amXpKQhyOUROw_kYNGKUi"},{url:"/_next/static/chunks/95-4f31c1279dd4075a.js",revision:"amXpKQhyOUROw_kYNGKUi"},{url:"/_next/static/chunks/app/department/%5Bname%5D/%5Bid%5D/order/new/page-4a5175fbe023b3b4.js",revision:"amXpKQhyOUROw_kYNGKUi"},{url:"/_next/static/chunks/app/department/%5Bname%5D/%5Bid%5D/order/page-a1ea4335a9ef2872.js",revision:"amXpKQhyOUROw_kYNGKUi"},{url:"/_next/static/chunks/app/department/%5Bname%5D/%5Bid%5D/order/view_order/page-17a1118aafea7e6a.js",revision:"amXpKQhyOUROw_kYNGKUi"},{url:"/_next/static/chunks/app/department/%5Bname%5D/page-8e98264e34686a86.js",revision:"amXpKQhyOUROw_kYNGKUi"},{url:"/_next/static/chunks/app/department/page-cabb01223d59d1aa.js",revision:"amXpKQhyOUROw_kYNGKUi"},{url:"/_next/static/chunks/app/food/page-effd4e36b0dc93c5.js",revision:"amXpKQhyOUROw_kYNGKUi"},{url:"/_next/static/chunks/app/layout-a05317186c390eee.js",revision:"amXpKQhyOUROw_kYNGKUi"},{url:"/_next/static/chunks/app/page-9252873f47f7d130.js",revision:"amXpKQhyOUROw_kYNGKUi"},{url:"/_next/static/chunks/bce60fc1-97c6f64f33809f3b.js",revision:"amXpKQhyOUROw_kYNGKUi"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"amXpKQhyOUROw_kYNGKUi"},{url:"/_next/static/chunks/main-0ffd66c1ede91232.js",revision:"amXpKQhyOUROw_kYNGKUi"},{url:"/_next/static/chunks/main-app-d52bd7897a231f27.js",revision:"amXpKQhyOUROw_kYNGKUi"},{url:"/_next/static/chunks/pages/_app-b75b9482ff6ea491.js",revision:"amXpKQhyOUROw_kYNGKUi"},{url:"/_next/static/chunks/pages/_error-7fafba9435aeb6bc.js",revision:"amXpKQhyOUROw_kYNGKUi"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-e63a25b1b0218ce7.js",revision:"amXpKQhyOUROw_kYNGKUi"},{url:"/_next/static/css/2986d81c47f11995.css",revision:"2986d81c47f11995"},{url:"/assets/back.png",revision:"cfb5b067658032fd1870f734369d041b"},{url:"/assets/delete.png",revision:"94fe9f2bc1c059f27df2bbb19bb708e9"},{url:"/assets/grid.svg",revision:"7d51f8d19b776cd0ad926a15d41f3894"},{url:"/assets/logo.png",revision:"b11b05c901080024d150e9155e7bc6a9"},{url:"/assets/plus.png",revision:"898cbc8ff1ba17ff338e08bcde8d4bf2"},{url:"/assets/reload.png",revision:"8e611787814128be3f0e0a3d622ee7d9"},{url:"/icons/icon-192x192.png",revision:"5df6bb4e26181d96f2970347ce6a051a"},{url:"/icons/icon-256x256.png",revision:"fbb2e12159a79f365101c4136b5a7f5f"},{url:"/icons/icon-384x384.png",revision:"9d33f306b36b2eb1e4f2412d15eeb6aa"},{url:"/icons/icon-512x512.png",revision:"a83cecd8a3dfa1201044bdba51e62aec"},{url:"/manifest.json",revision:"a30b25c61a278fd81cea8daab3cac0e6"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
