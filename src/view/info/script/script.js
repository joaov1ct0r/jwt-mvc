document.addEventListener('DOMContentLoaded', async () => {
    let url = 'http://localhost:3000/api/info';

    let options = {
        method: 'POST',
        body: null,
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    };

    const response = await fetch(url, options);

    if (response.status === 200) {
        const data = await response.json();

        let viewContainer = document.getElementById('view-container');

        viewContainer.innerHTML = `
            <div id="info-container" class='${data.id}'>
                <h1>Minhas Informações</h1>

                <br />

                <label for="nome">Seu nome</label>
                <br />
                <input type="name" placeholder="${data.nome}" name="nome" id="nome" disabled/>

                <br />

                <label for="email">Seu email</label>
                <br />
                <input type="email" placeholder="${data.email}" name="email" id="email" disabled
                />

                <br />

                <label for="idade">Sua Idade</label>
                <br />
                <input type="number" placeholder="${data.idade}" name="idade" id="idade" disabled
                />

                <br />

                <label for="pais">Seu país</label>
                <br />
                <input type="text" placeholder="${data.pais}" name="pais" id="pais" disabled />

                <br />

                <label for="senha">Sua senha</label>
                <br />
                <input type="password" placeholder="${data.senha}" name="senha" id="senha" disabled />
                <button>Editar</button>
                <button>Remover</button>
            </div>`;

        viewContainer.addEventListener('click', async event => {
            if (event.target.tagName === 'BUTTON') {
                let button = event.target;

                let infoContainer = button.parentNode;

                if (button.textContent === 'Editar') {
                    let nome = document.createElement('input');

                    nome.type = 'text';

                    nome.placeholder = data.nome;

                    infoContainer.insertBefore(nome, infoContainer.children[5]);

                    let email = document.createElement('input');

                    email.type = 'email';

                    email.placeholder = data.email;

                    infoContainer.insertBefore(
                        email,
                        infoContainer.children[10]
                    );

                    let idade = document.createElement('input');

                    idade.type = 'number';

                    idade.placeholder = data.idade;

                    infoContainer.insertBefore(
                        idade,
                        infoContainer.children[15]
                    );

                    let pais = document.createElement('input');

                    pais.type = 'text';

                    pais.placeholder = data.pais;

                    infoContainer.insertBefore(
                        pais,
                        infoContainer.children[20]
                    );

                    let senha = document.createElement('input');

                    senha.type = 'password';

                    senha.placeholder = data.senha;

                    infoContainer.insertBefore(
                        senha,
                        infoContainer.children[25]
                    );

                    button.textContent = 'Salvar';

                    button.addEventListener('click', async () => {
                        let url = `http://localhost:3000/api/edit/${infoContainer.className}`;

                        let options = {
                            method: 'PUT',
                            body: JSON.stringify({
                                nome,
                                email,
                                idade,
                                pais,
                                senha
                            }),
                            headers: {
                                'Content-type':
                                    'application/json; charset=UTF-8'
                            }
                        };

                        const response = await fetch(url, options);

                        window.location.href = '/info';
                    });
                } else if (button.textContent === 'Remover') {
                    let url = `http://localhost:3000/api/delete/${infoContainer.className}`;

                    let options = {
                        method: 'DELETE',
                        body: null,
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8'
                        }
                    };

                    const response = await fetch(url, options);

                    if (response.status === 200)
                        alert('Dados deletados com sucesso!');
                    else alert('Falha ao deletar dados!');
                }
            }
        });
    } else alert('Falha ao obter dados!');
});
