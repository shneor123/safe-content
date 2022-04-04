"use strict";




function init() {
  _createUsers()
}

function onLogin(ev) {
  ev.preventDefault()
  const elUsername = ev.target[0].value
  const elPassword = ev.target[1].value

  var user = doLogin(elUsername, elPassword);
  if (user) window.location = `admin.html`;

  if (!user) alert("Please enter right credentials")
  elUsername.value = ''
  elPassword.value = ''
}


// function onShowPassword() {
//   var elUserPass = document.querySelector('.password-input');
//   elUserPass.type = (elUserPass.type === "password") ? "text" : "password";
// }