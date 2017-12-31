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
    $("#status").html("Clicked change links button");

    var name = [$("#name").val(), $("#email").val(), $("#password").val()];

    if (!name) {
      $("#status").html("Invalid text provided");
      return;
    }

    chrome.storage.sync.set({ data: name }, function() {
      if (chrome.runtime.error) {
        console.log("Runtime error.");
      }
    });

    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { url: url }, function(response) {
        $("#status").html("Form updated!");
        console.log("success");
      });
    });
  });
});
