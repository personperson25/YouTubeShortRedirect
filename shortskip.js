function redirectToNormalFormat() {
    let ogurl = window.location.href.toString();
    let newurl = ogurl.replace("/shorts/", "/watch?v=");
    window.location.replace(newurl);
}

document.addEventListener("yt-navigate-start", function(event) {
    if (window.location.href.indexOf("shorts") > -1) {
        redirectToNormalFormat();
    }
});

if (window.location.href.indexOf("shorts") > -1) {
    redirectToNormalFormat();
}
