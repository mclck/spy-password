chrome.storage.sync.get("always", function(data) {
  if (data) {
    $("input[type='checkbox']").prop('checked', data.always);
  }
});

$(function() {
  $("#saved").click(function() {
    save_options();
    console.log($("input[type='checkbox']").prop('checked'));
    chrome.storage.sync.get("always", function(data) {
      console.log("data", data);
    });
  });
});

function save_options() {
  chrome.storage.sync.set({
    always: $("input[type='checkbox']").prop('checked')
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Saved';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}
