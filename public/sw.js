self.addEventListener("install", () => {
  console.log("SW installed");
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});