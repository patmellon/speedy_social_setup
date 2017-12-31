chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log("something happening from the extension");
  var url = request.url || {};
  var url_dash = request.url.replace(/[.]/i, "-");
  var upload_url_path = "http://" + url + "/wp-content/uploads/" + url_dash;

  document.getElementById("siteurl").value = "http://" + url;
  document.getElementById("home").value = "http://" + url;
  document.getElementById("permalink_structure").value = "/%postname%/";
  document.getElementById("uploads_use_yearmonth_folders").value = 0;
  document.getElementById("upload_path").value =
    "wp-content/uploads/" + url_dash;
  document.getElementById("upload_url_path").value = upload_url_path;

  //sendResponse({url: url, success: true});
});
