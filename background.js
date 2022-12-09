chrome.runtime.onInstalled.addListener(() => {
    console.log("Hello World");

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
                    "from a content script:" + sender.tab.url:
                    "from the extension");
        if(request.greetings === "hello")
        sendResponse({farewell: "goodbye"});
    }
);

chrome.contextMenus.create({
    id: "1",
    title: "Find the meaning of \"%s\"",
    contexts: ["selection"],
})
});

chrome.contextMenus.onClicked.addListener(function(info, tab){
    baseURL = "https://dictionary.cambridge.org/dictionary/english/";
    var newURL = baseURL + info.selectionText;
    chrome.tabs.create({url: newURL});
})

function define() {
    const a = window.getSelection();
    baseURL = "https://dictionary.cambridge.org/dictionary/english/";
    var newURL = baseURL + a;
    chrome.tabs.create({url: newURL});
    const el = document.querySelector("div.user-panel:not(.main) input[class='def ddef_d db']");
}
