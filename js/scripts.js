$(document).ready(function() {
  var over18 = confirm("Are you over 18? Click OK for yes or Cancel for no.");

  if (over18) {
    $('#voting-age').show();
  } else {
    $('#under-18').show();
  }
});
