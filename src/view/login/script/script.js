let submitLogin = document.getElementById("submitLogin");

submitLogin.addEventListener("click", () => {
    doLogin();
});

function doLogin() {
    let emailInput = document.getElementById("email").value;

    let senhaInput = document.getElementById("senha").value;

    let login = { emailInput, senhaInput };

    let url = "http://localhost:3000/api/login";

    let options = {
        method: "POST",
        body: JSON.stringify(login),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    };

    fetch(url, options).then(res => {
        console.log(res);

        document.getElementById("email").value = "";

        document.getElementById("senha").value = "";

        showInfo();
    });
}
