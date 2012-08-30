var injectStyle = function(href) {
    var style = document.createElement('style');
    style.rel = 'stylesheet';
    style.type = 'text/css';
    style.href = href;
    document.head.appendChild(style);
}

injectStyle(chrome.extension.getURL('smoke.css'));
injectStyle(chrome.extension.getURL('cheetah.css'));
