let submitLogin = document.getElementById('submitLogin');

submitLogin.addEventListener('click', async () => {
    let email = document.getElementById('email').value;

    let senha = document.getElementById('senha').value;

    let url = 'http://localhost:3000/api/login';

    let options = {
        method: 'POST',
        body: JSON.stringify({ email, senha }),
        headers: { 'Content-type': 'application/json; charset=UTF-8' }
    };

    const response = await fetch(url, options);

    if (response.status === 200) {
        document.getElementById('email').value = '';

        document.getElementById('senha').value = '';

        alert('Login realizado com sucesso!');

        window.location.href = response.url;
    } else {
        document.getElementById('email').value = '';

        document.getElementById('senha').value = '';

        alert('Falha na autenticação');
    }
});
