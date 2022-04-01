const submitCadastro = document.getElementById('submitCadastro');

submitCadastro.addEventListener('click', async () => {
    let nome = document.getElementById('nome').value;

    let email = document.getElementById('email').value;

    let idade = document.getElementById('idade').value;

    let pais = document.getElementById('pais').value;

    let senha = document.getElementById('senha').value;

    const url = 'http://localhost:3000/api/new';

    const options = {
        method: 'POST',
        body: JSON.stringify({ nome, email, idade, pais, senha }),
        headers: { 'Content-type': 'application/json; charset=UTF-8' }
    };

    const response = await fetch(url, options);

    if (response.status === 200) {
        document.getElementById('nome').value = '';

        document.getElementById('email').value = '';

        document.getElementById('idade').value = '';

        document.getElementById('pais').value = '';

        document.getElementById('senha').value = '';

        alert('Cadastro realizado com sucesso!');

        window.location.href = response.url;
    } else {
        document.getElementById('nome').value = '';

        document.getElementById('email').value = '';

        document.getElementById('idade').value = '';

        document.getElementById('pais').value = '';

        document.getElementById('senha').value = '';

        alert('Falha ao realizar cadastro');
    }
});
