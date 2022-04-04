'use strict'


function setSort() {
    var users = getUsersToShow()
    switch (gSortBy) {
        case 'name':
            users.sort((a, b) => {
                if (a.username < b.username) return -1
                if (a.username > b.username) return 1
                return 0
            })
            break
        case 'lastLogIn':
            users.sort((a, b) => {
                if (a.lastLoginTime < b.lastLoginTime) return -1
                if (a.lastLoginTime > b.lastLoginTime) return 1
                return 0;
            })
            break
    }
    _saveUsers(USERS_KEY, users)
    return gUsers
}
