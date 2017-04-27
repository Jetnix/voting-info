if (ageInput > 18) {
  $('#voting-age').show();
} else if (age === 18) {
  alert("Now don't go crazy!");
  $('#voting-age').show();
} else {
  $('#under-18').show();
}
});

$(document).ready(function() {
  var ageInput = parseInt($("input#age-input").val());
  if (ageInput >= 18) {
    $('#voting-age').show();
  }
})
