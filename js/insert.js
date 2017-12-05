$(function() {
  var value = $('input[type="password"]');
  chrome.storage.sync.get("always", function(data) {
    console.log("dddsfdg");
    if (data) {
      if (data.always) {
        value.attr('type', 'text');
        value.attr('spy', 'true');
      } else {
        console.log("Hahahaha");
        value.attr('spy', 'false');
      }
    } else {
      value.attr('spy', 'false');
    }
  });
});
