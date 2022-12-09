console.log("Hey man")

chrome.runtime.sendMessage({greeting: "hello"}, function(response){
    console.log(response.farewell);
});

function define() {
    const a = window.getSelection();
    baseURL = "https://dictionary.cambridge.org/dictionary/english/";
    var newURL = baseURL + a;
    chrome.tabs.create({url: newURL});
    const el = document.querySelector("div.user-panel:not(.main) input[class='def ddef_d db']");
}
window.addEventListener("mouseup", handleSelection);

var selectedText;

function handleSelection() {
  selectedText = window.getSelection().toString().replace(/\s/g, "");
}

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  let msg =
    selectedText && selectedText.length > 0
      ? selectedText
      : "_TextNotSelected_";
  sendResponse({ swor: msg });
}