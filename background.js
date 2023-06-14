chrome.runtime.onInstalled.addListener(function() {
    console.log("Auto admit extension has been installed.");
});

function handle_tab_event(tab){
    chrome.tabs.executeScript(
        tab.id, 
        {file: 'auto_admit.js'},
        function(result){});
}


chrome.tabs.onUpdated.addListener(function(tabid, changeInfo, tab) {
    if(changeInfo.status === "complete" && tab.status === "complete"){
        handle_tab_event(tab);
    }
});
  

chrome.tabs.onActivated.addListener(function (activeInfo) {
	// Get information about the activated tab
    chrome.tabs.get(activeInfo.tabId, function (tab) {
        handle_tab_event(tab);
    });
});