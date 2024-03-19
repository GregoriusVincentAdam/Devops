// Handle and validate
function action_val () {
  // get input values
  var name = document.getElementById("user-name") .value;
  var email = document.getElementById("user-email") .value;
  var address = document.getElementById("user-address") .value;

  // JavaScript validation for empty input field
  if(!name.trim() .length){
    alert("Empty user name !!!");
  }

  if(!email.trim() .length){
    alert("Empty user email !!!");
  }
}