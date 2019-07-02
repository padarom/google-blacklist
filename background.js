chrome.webRequest.onBeforeRequest.addListener(function (request) {
    console.log(request)
}, {
    urls: ['*://www.google.de/search*', '*://www.google.com/search*']
})
