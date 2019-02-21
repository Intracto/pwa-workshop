importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

console.log('this is my custom service worker');

workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "8265418a66eee6531efae8e4434b8114"
  },
  {
    "url": "js/main.js",
    "revision": "fb19cf42dadfd00e18e98c12845f88ed"
  },
  {
    "url": "styles/main.css",
    "revision": "de873600a53aa7b1a5ca009aead2996a"
  }
]);