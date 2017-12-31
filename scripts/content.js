chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log("something happening from the extension");
  var data = request.data || {};

  switch (true) {
    case data[3] == "Twitter":
    document.getElementById("full-name").value = data[0] + " " + data[1];
    document.getElementById("email").value = data[2];
    document.getElementById("password").value = data[3];
    break;

    case data[3] == "LinkedIn":
    document.getElementById("reg-firstname").value = data[0];
    document.getElementById("reg-lastname").value = data[1];
    document.getElementById("reg-email").value = data[2];
    document.getElementById("reg-password").value = data[3];
    break;
  }

  //sendResponse({url: url, success: true});
});
