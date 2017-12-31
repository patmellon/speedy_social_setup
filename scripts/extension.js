document.addEventListener("DOMContentLoaded", function() {
  document.body.onload = function() {
    chrome.storage.sync.get("data", function(items) {
      if (!chrome.runtime.error) {
        document.getElementById("name").value = items.data[0];
        document.getElementById("email").value = items.data[1];
        document.getElementById("password").value = items.data[2];
      }
    });
  };

  document.getElementById("status").textContent = "Example: clientname.com";
  var button = document.getElementById("changelinks");
  button.addEventListener("click", function() {
    document.getElementById("status").textContent = "Clicked button!";

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var data = [name, email, password];

    if (!data) {
      document.getElementById("status").textContent = "Invalid text provided";
      return;
    }

    chrome.storage.sync.set({ data: data }, function() {
      if (chrome.runtime.error) {
        console.log("Runtime error.");
      }
    });

    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { url: url }, function(response) {
        document.getElementById("status").textContent = "Form updated!";
        console.log("success");
      });
    });
  });
});
