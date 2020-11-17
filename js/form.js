/**
 * VALIDATE & SEND FORM
 * 1. Listen to the submit of the form element with the id "support-form"
 * 2. Validate on submit, that:
 *  2.1 the checkbox with the id "input-privacy" is checked
 *  2.2 all other inputs are not empty. If they're empty, add the class "border-red-500" to every empty input
 * 3. Send the form with the library axios as an POST REQUEST to https://hsh.blnq.dev/javascript-basics/form-fetch.php
 * 
 * https://github.com/axios/axios
 * 
 */

const form = document.getElementById("support-form");
const fullname = document.getElementById("input-fullname");
const number = document.getElementById("input-number");
const email = document.getElementById("input-email");
const message = document.getElementById("input-message");
const privacy = document.getElementById("input-privacy");

function validate_input(){
  if(number.value===""){
    inputEmpty()
  }
}

//add the class "border-red-500"
function inputEmpty(input) {
  const formControl = form.parentElement;
  formControl.className = "border-red-500";
}


// Event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();
console.log("aaa");
validate_input();

})

