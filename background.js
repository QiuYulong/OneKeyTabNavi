chrome.runtime.onMessage.addListener(
  function(message, sender, sendResponse) {
    var curTabIndex = 0;
    if(sender.tab){
      curTabIndex = sender.tab.index;
    }
    if(message.navi == "forward"){
      chrome.windows.getCurrent({populate: true}, function(window){
        var totalTab = window.tabs.length;
        var nextTab = ((curTabIndex+1) >= totalTab)? 0 : (curTabIndex+1);
        chrome.tabs.update(window.tabs[nextTab].id, {active:true});
      });
    }else if(message.navi == "backward"){
      chrome.windows.getCurrent({populate: true}, function(window){
        var totalTab = window.tabs.length;
        var nextTab = ((curTabIndex-1) >= 0) ? (curTabIndex-1) : (totalTab-1);
        chrome.tabs.update(window.tabs[nextTab].id, {active:true});
      });
    }
  }
);

