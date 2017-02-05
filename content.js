window.addEventListener('keydown', function(e){
  if(e.keyCode == 113){
    //alert("f2 pressed");
    chrome.runtime.sendMessage({navi: "backward"});
  }else if(e.keyCode == 114){
    //alert("f3 pressed");
    chrome.runtime.sendMessage({navi: "forward"});
  };
});
