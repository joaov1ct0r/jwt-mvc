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
        if (res.status === 200) {
            document.getElementById('email').value = '';

            document.getElementById('senha').value = '';

            const token = [...res.headers][0][1];

            console.log(token);

            document.cookie = `token=${token}; Secure; path=/login`;

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

    const equalChar = '=';

    const cookies = document.cookie;

    const token = cookies.split(equalChar)[1];

    let options = {
        method: 'POST',
        body: JSON.stringify({ email, senha }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'auth-token': token
        }
    };

    fetch(url, options)
        .then(res => {
            let data = res.json();

            return data;
        })
        .then(data => {
            let viewContainer = document.getElementById('view-container');

            viewContainer.innerHTML = `
                <div id="info-container" class='${data[0].id}'>
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

let viewContainer = document.getElementById('view-container');

viewContainer.addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON') {
        let button = event.target;

        let infoContainer = button.parentNode;

        if (button.textContent === 'Editar') {
            let nome = document.createElement('input');

            nome.type = 'text';

            nome.placeholder = 'Nome';

            infoContainer.insertBefore(nome, infoContainer.children[5]);

            let email = document.createElement('input');

            email.type = 'email';

            email.placeholder = 'Email';

            infoContainer.insertBefore(email, infoContainer.children[10]);

            let idade = document.createElement('input');

            idade.type = 'number';

            idade.placeholder = 'Idade';

            infoContainer.insertBefore(idade, infoContainer.children[15]);

            let pais = document.createElement('input');

            pais.type = 'text';

            pais.placeholder = 'Pais';

            infoContainer.insertBefore(pais, infoContainer.children[20]);

            let senha = document.createElement('input');

            senha.type = 'password';

            senha.placeholder = 'Senha';

            infoContainer.insertBefore(senha, infoContainer.children[25]);

            button.textContent = 'Salvar';

            button.addEventListener('click', () => {
                editUser(
                    nome.value,
                    email.value,
                    idade.value,
                    pais.value,
                    senha.value
                );
            });

            function editUser(nome, email, idade, pais, senha) {
                let url = `http://localhost:3000/api/edit/${infoContainer.className}`;

                console.log(infoContainer);

                const equalChar = '=';

                const cookies = document.cookie;

                const token = cookies.split(equalChar)[1];

                let options = {
                    method: 'PUT',
                    body: JSON.stringify({ nome, email, idade, pais, senha }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                        'auth-token': token
                    }
                };

                fetch(url, options).then(res => {
                    console.log(res);

                    showInfo(email, senha);
                });
            }
        } else if (button.textContent === 'Remover') {
            let url = `http://localhost:3000/api/delete/${infoContainer.className}`;

            const equalChar = '=';

            const cookies = document.cookie;

            const token = cookies.split(equalChar)[1];

            let options = {
                method: 'DELETE',
                body: null,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'auth-token': token
                }
            };

            fetch(url, options).then(res => {
                console.log(res);

                if (res.status === 200) {
                    infoContainer.innerHTML = `<div id="user-response">
                                                <p>CADASTRO DELETADO COM SUCESSO</p>
                                              </div>`;
                } else {
                    infoContainer.innerHTML = `<div id="user-response">
                                                <p>FALHA NA AUTENTICAÇÃO</p>
                                              </div>`;
                }
            });
        }
    }
});
