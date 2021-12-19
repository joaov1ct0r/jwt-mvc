let viewContainer = document.getElementById("view-container");

let infoLink = document.getElementById("infoLink");

infoLink.addEventListener("click", () => {
    showInfo();
});

function showInfo() {
    let url = "http://localhost:3000/api/all";

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
