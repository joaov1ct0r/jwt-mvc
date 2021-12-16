// document.addEventListener('DOMContentLoaded', () => {
//   attData()
// })
// let attData = () {
//   let url = "http://localhost:3000/api/all"

//   fetch(url).then(res => {
//     let data = res.json()

//     return data
//   }).then(data => {

//   })
// }

const submitCadastro = document.getElementById("submitCadastro");

submitCadastro.addEventListener("click", () => {
    newUser();
});

function newUser() {
    let nome = document.getElementById("nome").value;

    let email = document.getElementById("email").value;

    let idade = document.getElementById("idade").value;

    let pais = document.getElementById("pais").value;

    let senha = document.getElementById("senha").value;

    let user = { nome, email, idade, pais, senha };

    const url = "http://localhost:3000/api/new";

    const options = {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    };

    fetch(url, options).then(res => {
        console.log(res);

        document.getElementById("nome").value = "";

        document.getElementById("email").value = "";

        document.getElementById("idade").value = "";

        document.getElementById("pais").value = "";

        document.getElementById("senha").value = "";
    });
}
