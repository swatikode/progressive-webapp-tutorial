// Register the service work
// Check if browser supports SW - https://caniuse.com/#search=service%20workers

// Navigator is an JS object in browser
if('serviceWorker' in navigator) {
    // It supports so we can use it
    navigator.serviceWorker.register('/sw.js')
    .then((reg) => {
        console.log("service worker registered");
        console.log(reg);
    })
    .catch((err) => {
        console.log("service worker not registered" + err);
    })
}