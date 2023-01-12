const staticDevCoffee = "dev-oche-sushi-v1";
const assets = [
  "./",
  "css/style.css",
  "js/app.js",
  "images/hot.jpg",
  "images/niguiri.jpg",
  "images/skin.jpg",
  "images/uramaki.webp"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  );
});