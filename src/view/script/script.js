let loginContainer = document.getElementById("login-container");

let cadastroContainer = document.getElementById("cadastro-container");

let infoContainer = document.getElementById("info-container");

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

let loginLink = document.getElementById("loginLink");

loginLink.addEventListener("click", () => {
    showLogin();
});

function showLogin() {
    cadastroContainer.setAttribute("hidden", "hidden");

    infoContainer.setAttribute("hidden", "hidden");

    loginContainer.removeAttribute("hidden");
}

let cadastroLink = document.getElementById("cadastroLink");

cadastroLink.addEventListener("click", () => {
    showCadastro();
});

function showCadastro() {
    infoContainer.setAttribute("hidden", "hidden");

    loginContainer.setAttribute("hidden", "hidden");

    cadastroContainer.removeAttribute("hidden");
}

let infoLink = document.getElementById("infoLink");

infoLink.addEventListener("click", () => {
    showInfo();
});

function showInfo() {
    loginContainer.setAttribute("hidden", "hidden");

    cadastroContainer.setAttribute("hidden", "hidden");

    infoContainer.removeAttribute("hidden");
}
