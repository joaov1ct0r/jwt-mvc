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
},

deleteUser(index){
  delete this.usersDb[index]
},

changeUser (index, nome, email, idade, pais, senha){
    this.usersDb[index].nome = nome;

    this.usersDb[index].email = email;

    this.usersDb[index].idade = idade;

    this.usersDb[index].pais = pais;

    this.usersDb[index].senha = senha;
}
}