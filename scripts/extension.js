document.addEventListener("DOMContentLoaded", function() {
  //Load saved input

  document.body.onload = function() {
    chrome.storage.sync.get("data", function(items) {
      if (!chrome.runtime.error) {
        document.getElementById("firstName").value = items.data.firstName;
        document.getElementById("lastName").value = items.data.lastName;
        document.getElementById("email").value = items.data.email;
      }
    });
    chrome.storage.sync.get("profile", function(p) {
      if (!chrome.runtime.error) {
        document.getElementById("profiles").value = p.profile;
      }
    });
  };

  //Show link based on user selection
  var profileLink = "";
  var form = document.getElementById("profiles");
  form.addEventListener("change", function() {
    var profileValue = document.getElementById("profiles").value;

    if (profileValue == "") {
      document.getElementById("link").innerHTML = "";
    }

    if (profileValue == "Twitter") {
      document.getElementById("link").innerHTML =
        "<a href=''>Visit " + profileValue + "</a>";
      profileLink = "http://www.twitter.com/signup";
    }

    if (profileValue == "LinkedIn") {
      document.getElementById("link").innerHTML =
        "<a href=''>Visit " + profileValue + "</a>";
      profileLink = "http://www.linkedin.com";
    }

    if (profileValue == "Slideshare") {
      document.getElementById("link").innerHTML =
        "<a href=''>Visit " + profileValue + "</a>";
      profileLink = "https://www.slideshare.net/w/signup/organization";
    }

    if (profileValue == "Levo") {
      document.getElementById("link").innerHTML =
        "<a href=''>Visit " + profileValue + "</a>";
      profileLink = "https://www.levo.com/join";
    }

    if (profileValue == "Behance") {
      document.getElementById("link").innerHTML =
        "<a href=''>Visit " + profileValue + "</a>";
      profileLink = "http://www.behance.net/signup";
    }

    if (profileValue == "Tumblr") {
      document.getElementById("link").innerHTML =
        "<a href=''>Visit " + profileValue + "</a>";
      profileLink = "http://www.tumblr.com";
    }

    if (profileValue == "Pinterest") {
      document.getElementById("link").innerHTML =
        "<a href=''>Visit " + profileValue + "</a>";
      profileLink = "https://www.pinterest.com";
    }

    if (profileValue == "Wordpress") {
      document.getElementById("link").innerHTML =
        "<a href=''>Visit " + profileValue + "</a>";
      profileLink = "https://wordpress.com/start";
    }

    if (profileValue == "Vimeo") {
      document.getElementById("link").innerHTML =
        "<a href=''>Visit " + profileValue + "</a>";
      profileLink = "http://www.vimeo.com";
    }

    if (profileValue == "Strikingly") {
      document.getElementById("link").innerHTML =
        "<a href=''>Visit " + profileValue + "</a>";
      profileLink = "";
    }

    if (profileValue == "Contently") {
      document.getElementById("link").innerHTML =
        "<a href=''>Visit " + profileValue + "</a>";
      profileLink = "";
    }

    if (profileValue == "Reedsy") {
      document.getElementById("link").innerHTML =
        "<a href=''>Visit " + profileValue + "</a>";
      profileLink = "";
    }
  });

  //Open link on click

  var link = document.getElementById("link");
  link.addEventListener("click", function() {
    var profile = document.getElementById("profiles").value;

    chrome.storage.sync.set({ profile: profile }, function() {
      if (chrome.runtime.error) {
        console.log("Runtime error.");
      }
    });

    chrome.tabs.create({ url: profileLink });
  });

  //Create form variables and Listen for form click

  var button = document.getElementById("changelinks");
  button.addEventListener("click", function() {
    document.getElementById("status").textContent = "Clicked button!";

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var profile = document.getElementById("profiles");
    var selectedProfile = profile.options[profile.selectedIndex].value;

    var data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      selectedProfile: selectedProfile
    };

    //Store saved data

    chrome.storage.sync.set({ data: data }, function() {
      if (chrome.runtime.error) {
        console.log("Runtime error.");
      }
    });

    //Send the data to content.js to update the website form

    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { data: data }, function(response) {
        document.getElementById("status").textContent = "Form updated!";
        console.log("success");
      });
    });
  });

  //Clear data from form and storage

  var clear = document.getElementById("clear");
  clear.addEventListener("click", function() {
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("profiles").value = "";

    data = {
      firstName: "",
      lastName: "",
      email: "",
      selectedProfile: ""
    };

    chrome.storage.sync.set({ data: data }, function() {
      if (chrome.runtime.error) {
        console.log("Runtime error.");
      }
    });
  });
});
