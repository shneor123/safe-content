'use strict'

var gSortBy = 'name'


function initAdminPage() {
    printUserName()
    renderUsers()
}

function onSetSort(sortBy) {
    gSortBy = sortBy
    if (!gSortBy) return gUsers
    setSort()
    renderUsers()
}

function onAdminLog() {
    var user = getLoggedInUser()
    if (!user.isAdmin) return
    document.querySelector('.admin-table').style.display = 'block'
}

function printUserName() {
    var user = getLoggedInUser()
    var elHead = document.querySelector('.logged-in')
    var elAdminButton = document.querySelector('.admin-btn')
    if (user.isAdmin) elAdminButton.style.display = 'inline'
    elHead.innerText = `Welcome back ${user.username}..`
}

function onLogout() {
    var elHead = document.querySelector('.logged-in')
    elHead.innerText = `Enjoy your day..`
    setTimeout(logUserOut, 1000)
}

function renderUsers() {
    const users = getUsersToShow()
    const elUsers = document.querySelector('.admin-content')
    const strHTML = users.map(user => `
    <tr class="${(user.isAdmin) ? 'admin' : ''}">
    <td>${user.username}</td> 
    <td>${user.password}</td> 
    <td>${user.lastLoginTime}</td> 
    <td>${user.isAdmin}</td> 
    </tr>`)
    elUsers.innerHTML = strHTML.join('')
}