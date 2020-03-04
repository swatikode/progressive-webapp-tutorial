self.addEventListener('install', evt => {
    console.log("Service work has been installed");
});

// Activate event for service worker
// This is actually listening for activate event
self.addEventListener('activate', evt => {
    console.log("serivce worker has been activated");
})

// Fetch event, listens to fetch events when they happen
self.addEventListener('fetch', evt => {
    console.log("Fetch events", evt);
});