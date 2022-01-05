let submitLogin = document.getElementById('submitLogin');

submitLogin.addEventListener('click', () => {
    doLogin();
});

function doLogin() {
    let email = document.getElementById('email').value;

    let senha = document.getElementById('senha').value;

    let url = 'http://localhost:3000/api/login';

    let options = {
        method: 'POST',
        body: JSON.stringify({ email, senha }),
        headers: { 'Content-type': 'application/json; charset=UTF-8' }
    };

    fetch(url, options).then(res => {
        console.log(res);

        if (res.status === 200) {
            document.getElementById('email').value = '';

            document.getElementById('senha').value = '';

            showInfo(email, senha);
        } else if (res.status === 500) {
            document.getElementById('email').value = '';

            document.getElementById('senha').value = '';

            let viewContainer = document.getElementById('view-container');

            viewContainer.innerHTML = `
                <div id="user-response">
                    <p>FALHA NA AUTENTICAÇÃO</p>
                </div>`;
        }
    });
}

function showInfo(email, senha) {
    let url = 'http://localhost:3000/api/info';

    let options = {
        method: 'POST',
        body: JSON.stringify({ email, senha }),
        headers: { 'Content-type': 'application/json; charset=UTF-8' }
    };

    fetch(url, options)
        .then(res => {
            let data = res.json();

            return data;
        })
        .then(data => {
            let viewContainer = document.getElementById('view-container');

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
                    <button>Editar</button>
                    <button>Remover</button>
                </div>`;
        });
}
