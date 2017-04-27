$(document).ready(function() {
  var ageInput = parseInt(prompt("How old are you?"));

  if (ageInput > 18) {
    $('#voting-age').show();
  } else if (ageInput === 18) {
    alert("You are now able to vote!");
    $('#voting-age').show();
  } else {
    $('#under-18').show();
  }
});
