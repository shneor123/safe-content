"use strict"

const USERS_KEY = "userDB"
const LOGGED_KEY = "idUser"
var gUsers = []

function getUsersToShow() {
  var users = loadFromStorage(USERS_KEY)
  if (!users) _createUsers()
  return users
}

function logUserOut() {
  _saveUsers(LOGGED_KEY, null)
  window.location = `index.html`
}

function getLoggedInUser() {
  var user = loadFromStorage(LOGGED_KEY)
  if (!user) return
  return user
}

function doLogin(userName, password) {
  var user = gUsers.find((user) =>
      user.username === userName && user.password.toString() === password);
  if (!user) return;
  else {
    user.lastLoginTime = Date.now()
    console.log("gUsers", gUsers)
    _saveUsers(USERS_KEY, gUsers)
    _saveUsers(LOGGED_KEY, user)
    return user
  }
}

function _createUsers() {
  createUser("puki", 5781, 35, true)
  createUser("muki", 5782, 15, false)
  createUser("shneor", 5783, 5, true)
  _saveUsers(USERS_KEY, gUsers)
}

function createUser(username, password, lastLoginTime, isAdmin = false) {
  var user = {
    id: _makeId(),
    username,
    password,
    lastLoginTime,
    isAdmin,
  }
  gUsers.push(user)
}

function _makeId(length = 5) {
  var txt = ""
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return txt
}
