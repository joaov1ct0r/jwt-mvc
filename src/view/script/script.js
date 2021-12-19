let loginContainer = document.getElementById("login-container");

let cadastroContainer = document.getElementById("cadastro-container");

let infoContainer = document.getElementById("info-container");

let viewContainer = document.getElementById("view-container");

let loginLink = document.getElementById("loginLink");

loginLink.addEventListener("click", () => {
    showLogin();
});

function showLogin() {
    viewContainer.innerHTML = `
        <div id="login-container">
            <h1>Faça login</h1>

            <br />

            <label for="email">Digite seu email</label>
            <br />
            <input
                type="email"
                placeholder="Email"
                name="email"
                id="email"
            />

            <br />

            <label for="senha">Digite sua senha</label>
            <br />
            <input
                type="password"
                placeholder="Senha"
                name="senha"
                id="senha"
            />

            <br />

            <button type="button" id="submitLogin">Logar</button>

            <br />
        </div>`;
}

let cadastroLink = document.getElementById("cadastroLink");

cadastroLink.addEventListener("click", () => {
    showCadastro();
});

function showCadastro() {
    viewContainer.innerHTML = `
        <div id="cadastro-container">
            <h1>CADASTRE-SE</h1>
            <label for="nome">Digite seu nome</label>
            <br />
            <input type="name" placeholder="Nome" name="nome" id="nome" />

            <br />

            <label for="email">Digite seu email</label>
            <br />
            <input type="email" placeholder="Email" name="email" id="email"/>

            <br />

            <label for="idade">Digite sua Idade</label>
            <br />
            <input type="number" placeholder="Idade" name="idade" id="idade"
            />

            <br />

            <label for="pais">Digite seu país</label>
            <br />
            <input type="text" placeholder="País" name="pais" id="pais" />

            <br />

            <label for="senha">Digite sua senha</label>
            <br />
            <input type="password" placeholder="Senha" name="senha id="senha" />

            <br />

            <button id="submitCadastro">Enviar</button>

            <br />
        </div>`;
}

let infoLink = document.getElementById("infoLink");

infoLink.addEventListener("click", () => {
    showInfo();
});

function showInfo() {
    let url = "http://localhost:3000/api/cadastros/all";

    fetch(url)
        .then(res => {
            let data = res.json();

            return data;
        })
        .then(data => {
            viewContainer.innerHTML = `
                <div id="info-container">
                    <h1>Minhas Informações</h1>

                    <br />

                    <label for="nome">Seu nome</label>
                    <br />
                    <input type="name" placeholder="${data[0].nome}" name="nome" id="nome" disabled/>

                    <br />

                    <label for="email">Seu email</label>
                    <br />
                    <input type="email" placeholder="${data[0].email}" name="email" id="email" disabled
                    />

                    <br />

                    <label for="idade">Sua Idade</label>
                    <br />
                    <input type="number" placeholder="${data[0].idade}" name="idade" id="idade" disabled
                    />

                    <br />

                    <label for="pais">Seu país</label>
                    <br />
                    <input type="text" placeholder="${data[0].pais}" name="pais" id="pais" disabled />

                    <br />

                    <label for="senha">Sua senha</label>
                    <br />
                    <input type="password" placeholder="${data[0].senha}" name="senha" id="senha" disabled />
                </div>`;
        });
}

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

let submitLogin = document.getElementById("submitLogin");

submitLogin.addEventListener("click", () => {
    doLogin();
});

function doLogin() {
    let emailInput = document.getElementById("email").value;

    let senhaInput = document.getElementById("senha").value;

    let login = { emailInput, senhaInput };

    let url = "http://localhost:3000/api/all";

    let options = {
        method: "POST",
        body: JSON.stringify(login),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    };

    fetch(url, options).then(res => {
        console.log(res);

        document.getElementById("email").value = "";

        document.getElementById("senha").value = "";
    });
}
