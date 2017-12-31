chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log("something happening from the extension");
  var data = request.data || {};

  if (data[3] == "Twitter"){
    document.getElementById("full-name").value = data[0]
    document.getElementById("email").value = data[1];
    document.getElementById("password").value = data[2];
  };
//  else if (data[3] !== "Twitter") {alert("hmm")}

  //sendResponse({url: url, success: true});
});
