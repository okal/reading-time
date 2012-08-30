function getReadingTime(info, tab) {
    var timeUrl = "http://www.reading-time.samrat.me/api?url="+info.linkUrl;
    var req = new XMLHttpRequest();
    req.open(
        "GET",
        timeUrl,
        true
    );
    req.onload = showTime;
    req.send(null);

    function showTime() {
        var readableTime = JSON.parse(req.responseText).readable;
        var code = 'smoke.signal("This will take '+readableTime+'");'
        chrome.tabs.executeScript(tab.id, {'code': code});
    }
}

var menuItem = chrome.contextMenus.create({
    "title": "How long will this take?",
    "contexts": ["link"],
    "onclick": getReadingTime
});
