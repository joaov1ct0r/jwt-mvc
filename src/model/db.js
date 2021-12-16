module.exports = {
 usersDb = [],

 getUsers () {
    return this.usersDb
},

getUser (index) {
  return this.usersDb[index]
},

newUser (nome, email, idade, pais, senha){
  this.usersDb.push({
    id: generateId(), 
    nome, 
    email, 
    idade, 
    pais, 
    senha})
}
}