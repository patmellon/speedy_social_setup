chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log("something happening from the extension");
  var data = request.data || {};

  switch (true) {

    case data.selectedProfile == "Twitter":
    document.getElementById("full-name").value = data.firstName + " " + data.lastName;
    document.getElementById("email").value = data.email;
    break;

    case data.selectedProfile == "LinkedIn":
    document.getElementById("reg-firstname").value = data.firstName;
    document.getElementById("reg-lastname").value = data.lastName;
    document.getElementById("reg-email").value = data.email;
    break;

    case data.selectedProfile == "Slideshare":
    document.getElementById("j-user-login").value = data.firstName + data.lastName;
    document.getElementById("j-user-email").value = data.email;
    break;

    case data.selectedProfile == "Levo":
    document.getElementById("first_name").value = data.firstName;
    document.getElementById("last_name").value = data.lastName;
    document.getElementById("email").value = data.email;
    break;

    case data.selectedProfile == "Behance":
    document.getElementById("first_name").value = data.firstName;
    document.getElementById("last_name").value = data.lastName;
    document.getElementById("email_address").value = data.email;
    break;

    case data.selectedProfile == "Tumblr":
    document.getElementById("signup_username").value = data.firstName + data.lastName;
    document.getElementById("signup_email").value = data.email;
    break;

    case data.selectedProfile == "Pinterest":
    document.getElementById("email").value = data.email;
    break;

    case data.selectedProfile == "Wordpress":
    document.getElementById("username").value = data.firstName + data.lastName;
    document.getElementById("email").value = data.email;
    break;

  }

  //sendResponse({url: url, success: true});
});
