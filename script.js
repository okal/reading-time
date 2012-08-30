var getReadingTime = function(info, tab) {
    alert("Constructing request");
    var req = XMLHttpRequest();

    req.open(
        "GET",
        "http://www.reading-time.samrat.me/api?url="+
           info.linkUrl,
        true);
    req.onload = function() {
        var data = eval(req.responseText);
        alert(data.readable);
    }
    req.send(null);
}

var menuItem = chrome.contextMenus.create({
    "title": "How long will this take?",
    "contexts": ["link"],
    "onclick": getReadingTime
});
