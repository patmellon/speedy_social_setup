chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log("something happening from the extension");
  var data = request.data || {};

  switch (true) {

    case data[3] == "Twitter":
    document.getElementById("full-name").value = data[0] + " " + data[1];
    document.getElementById("email").value = data[2];
    break;

    case data[3] == "LinkedIn":
    document.getElementById("reg-firstname").value = data[0];
    document.getElementById("reg-lastname").value = data[1];
    document.getElementById("reg-email").value = data[2];
    break;

    case data[3] == "Slideshare":
    document.getElementById("j-user-login").value = data[0] + data[1];
    document.getElementById("j-user-email").value = data[2];
    break;

    case data[3] == "Levo":
    document.getElementById("first_name").value = data[0];
    document.getElementById("last_name").value = data[1];
    document.getElementById("email").value = data[2];
    break;

    case data[3] == "Behance":
    document.getElementById("first_name").value = data[0];
    document.getElementById("last_name").value = data[1];
    document.getElementById("email_address").value = data[2];
    break;

    case data[3] == "Tumblr":
    document.getElementById("signup_username").value = data[0] + data[1];
    document.getElementById("signup_email").value = data[2];
    break;

    case data[3] == "Pinterest":
    document.getElementById("email").value = data[2];
    break;
  
  }

  //sendResponse({url: url, success: true});
});
