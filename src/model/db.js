module.exports = {
 usersDb = [],

 getUsers () {
    return this.usersDb
},

getUser (index) {
  return this.usersDb[index]
}
}