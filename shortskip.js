const channelPaths = ["/@", "/c/", "/channel/", "/user/"];

function redirectToNormalFormat() {
    let ogurl = window.location.href.toString();
    let newurl = ogurl.replace("/shorts/", "/watch?v=");
    window.location.replace(newurl);
}

document.addEventListener("yt-navigate-start", function(event) {
    if (window.location.href.includes("shorts")) {
        if (channelPaths.every(path => !window.location.href.includes(path))) {
            redirectToNormalFormat();
        }
    }
});

if (window.location.href.includes("shorts")) {
    if (channelPaths.every(path => !window.location.href.includes(path))) {
        redirectToNormalFormat();
    }
}
