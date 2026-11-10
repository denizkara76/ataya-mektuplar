const CACHE='bsk-book-real-20261110';
self.addEventListener('install',e=>e.waitUntil(self.skipWaiting()));
self.addEventListener('activate',e=>e.waitUntil((async()=>{for(const name of await caches.keys())if(name.startsWith('bsk-book-')&&name!==CACHE)await caches.delete(name);await self.clients.claim()})()));
