document.addEventListener("DOMContentLoaded", function() {

  //Load saved input

  document.body.onload = function() {
    chrome.storage.sync.get("data", function(items) {
      if (!chrome.runtime.error) {
        document.getElementById("name").value = items.data[0];
        document.getElementById("email").value = items.data[1];
      }
    });
  };

  //Show link based on user selection
  var profileLink = ""
  var form = document.getElementById("profiles");
  form.addEventListener("change", function() {
    var profileValue = document.getElementById("profiles").value
    if (profileValue == "Twitter") {
      document.getElementById("link").innerHTML = "<a href=''>Visit " + profileValue + "</a>";
      profileLink = "http://www.twitter.com/signup"
    }
  })

  //Open link on click

  var link = document.getElementById("link")
  link.addEventListener("click", function(){
    chrome.tabs.create({ url: profileLink })
  })

  var button = document.getElementById("changelinks");
  button.addEventListener("click", function() {
    document.getElementById("status").textContent = "Clicked button!";

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var profile = document.getElementById("profiles");
    var selectedProfile = profile.options[profile.selectedIndex].value;

    var data = [name, email, password, selectedProfile];
    var savedData = [name, email];

    //Store saved data (only username and email)

    chrome.storage.sync.set({ data: savedData }, function() {
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

  //Clear data from from and storage

  var clear = document.getElementById("clear");
  clear.addEventListener("click", function() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";

    data = ["", "", ""];

    chrome.storage.sync.set({ data: data }, function() {
      if (chrome.runtime.error) {
        console.log("Runtime error.");
      }
    });
  })

});
