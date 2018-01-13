document.addEventListener("DOMContentLoaded", function() {
  //Load saved input

  document.body.onload = function() {
    chrome.storage.sync.get("data", function(items) {
      if (typeof items.data === "undefined") {
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("email").value = "";
      } else {
        if (!chrome.runtime.error) {
          document.getElementById("firstName").value = items.data.firstName;
          document.getElementById("lastName").value = items.data.lastName;
          document.getElementById("email").value = items.data.email;
        }
      }
    });
    chrome.storage.sync.get("profile", function(p) {
      if (typeof p.profile === "undefined") {
        document.getElementById("profiles").value = "";
      } else {
        if (!chrome.runtime.error) {
          document.getElementById("profiles").value = p.profile;
        }
      }
    });
  };

  //Display instructions on mouseover and hide on mouseout.
  var instructions = document.getElementById("instructions");
  var instructionContent = document.getElementById("instructionContent");
  instructions.addEventListener("mouseover", function() {
    instructionContent.style.display = "block";
  });
  instructions.addEventListener("mouseout", function() {
    instructionContent.style.display = "none";
  });

  //Show link based on user selection
  var profileLink = "";
  var form = document.getElementById("profiles");
  form.addEventListener("change", function() {
    var profileValue = document.getElementById("profiles").value;
    var link = document.getElementById("link");
    var createAhref = document.createElement("a");
    var text = document.createTextNode("Visit " + profileValue);
    var initialText = document.createTextNode("");

    if (profileValue == "") {
      if (typeof link.childNodes[0] === "undefined") {
        link.appendChild(initialText);
      } else {
        link.replaceChild(initialText, link.childNodes[0]);
      }
    }

    if (profileValue == "Twitter") {
      profileLink = "https://www.twitter.com/signup";
      createAhref.setAttribute("href", profileLink);
      createAhref.appendChild(text);
      if (typeof link.childNodes[0] === "undefined") {
        link.appendChild(createAhref);
      } else {
        link.replaceChild(createAhref, link.childNodes[0]);
      }
    }

    if (profileValue == "LinkedIn") {
      profileLink = "https://www.linkedin.com";
      createAhref.setAttribute("href", profileLink);
      createAhref.appendChild(text);
      if (typeof link.childNodes[0] === "undefined") {
        link.appendChild(createAhref);
      } else {
        link.replaceChild(createAhref, link.childNodes[0]);
      }
    }

    if (profileValue == "Slideshare") {
      profileLink = "https://www.slideshare.net/w/signup/organization";
      createAhref.setAttribute("href", profileLink);
      createAhref.appendChild(text);
      if (typeof link.childNodes[0] === "undefined") {
        link.appendChild(createAhref);
      } else {
        link.replaceChild(createAhref, link.childNodes[0]);
      }
    }

    if (profileValue == "Levo") {
      profileLink = "https://www.levo.com/join";
      createAhref.setAttribute("href", profileLink);
      createAhref.appendChild(text);
      if (typeof link.childNodes[0] === "undefined") {
        link.appendChild(createAhref);
      } else {
        link.replaceChild(createAhref, link.childNodes[0]);
      }
    }

    if (profileValue == "Behance") {
      profileLink = "https://www.behance.net/signup";
      createAhref.setAttribute("href", profileLink);
      createAhref.appendChild(text);
      if (typeof link.childNodes[0] === "undefined") {
        link.appendChild(createAhref);
      } else {
        link.replaceChild(createAhref, link.childNodes[0]);
      }
    }

    if (profileValue == "Tumblr") {
      profileLink = "https://www.tumblr.com";
      createAhref.setAttribute("href", profileLink);
      createAhref.appendChild(text);
      if (typeof link.childNodes[0] === "undefined") {
        link.appendChild(createAhref);
      } else {
        link.replaceChild(createAhref, link.childNodes[0]);
      }
    }

    if (profileValue == "Pinterest") {
      profileLink = "https://www.pinterest.com";
      createAhref.setAttribute("href", profileLink);
      createAhref.appendChild(text);
      if (typeof link.childNodes[0] === "undefined") {
        link.appendChild(createAhref);
      } else {
        link.replaceChild(createAhref, link.childNodes[0]);
      }
    }

    if (profileValue == "Wordpress") {
      profileLink = "https://wordpress.com/start";
      createAhref.setAttribute("href", profileLink);
      createAhref.appendChild(text);
      if (typeof link.childNodes[0] === "undefined") {
        link.appendChild(createAhref);
      } else {
        link.replaceChild(createAhref, link.childNodes[0]);
      }
    }

    if (profileValue == "Vimeo") {
      profileLink = "https://www.vimeo.com";
      createAhref.setAttribute("href", profileLink);
      createAhref.appendChild(text);
      if (typeof link.childNodes[0] === "undefined") {
        link.appendChild(createAhref);
      } else {
        link.replaceChild(createAhref, link.childNodes[0]);
      }
    }

    if (profileValue == "Strikingly") {
      profileLink = "https://www.strikingly.com/";
      createAhref.setAttribute("href", profileLink);
      createAhref.appendChild(text);
      if (typeof link.childNodes[0] === "undefined") {
        link.appendChild(createAhref);
      } else {
        link.replaceChild(createAhref, link.childNodes[0]);
      }
    }

    if (profileValue == "Contently") {
      profileLink = "https://contently.com/register";
      createAhref.setAttribute("href", profileLink);
      createAhref.appendChild(text);
      if (typeof link.childNodes[0] === "undefined") {
        link.appendChild(createAhref);
      } else {
        link.replaceChild(createAhref, link.childNodes[0]);
      }
    }

    if (profileValue == "Reedsy") {
      profileLink = "https://reedsy.com/";
      createAhref.setAttribute("href", profileLink);
      createAhref.appendChild(text);
      if (typeof link.childNodes[0] === "undefined") {
        link.appendChild(createAhref);
      } else {
        link.replaceChild(createAhref, link.childNodes[0]);
      }
    }
  });

  //Open link on click and save the selection in storage.
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

  //Create form variables and Listen for form click.

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
      email: email.toLowerCase(),
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
    document.getElementById("link").innerHTML = "";

    data = {
      firstName: "",
      lastName: "",
      email: "",
      selectedProfile: ""
    };

    var profile = "";

    chrome.storage.sync.set({ data: data, profile: profile }, function() {
      if (chrome.runtime.error) {
        console.log("Runtime error.");
      }
    });
  });
});
