var menuItem = chrome.contextMenus.create({
    "title": "How long will this take?",
    "onclick": getReadingTime
});
