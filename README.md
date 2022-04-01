# Sistema de cadastro e Login de usuarios

<h1>EM DESENVOLVIMENTO</h1>

<h2>Requisitos</h2>

<ul>
  <li>NodeJS</li>
  <p><code>sudo apt install nodejs</code></p>
  <br>
  <li>NPM</li>
  <p><code>sudo apt install npm</code></p>
  <br>
  <li>dotenv</li>
  <p><code>npm install dotenv</code></p>
  <br>
  <li>Express</li>
  <p><code>npm install express</code></p>
  <br>
  <li>sequelize</li>
  <p><code>npm install sequelize</code></p>
  <br>
  <li>MYSQL 2</li>
  <p><code>npm install --save mysql2</code></p>
  <br>
  <li>body-parser</li>
  <p><code>npm install body-parser</code></p>
  <br>
  <li>bcryptjs</li>
  <p><code>npm install bcryptjs</code></p>
  <br>
  <li>jwt</li>
  <p><code>npm install jsonwebtoken</code></p>
  <br>
  <li>cookie-parser</li>
  <p><code>npm install cookie-parser</code></p>
  <br>
</ul>

<h2>Sobre</h2>

<p>Sistema de cadastro e login do usuario, O sistema consiste em 2 abas, Cadastro e Login</p>

<p>Na aba de cadastro temos 5 Input para informações do cadastramento do usuario, 5 Labels para esses input e 1 botão de envio, quando o usuario insere suas informações os dados são enviados ao back-end que faz o cadastramento do usuario no banco de dados MySQL pela rota /api/new</p>

<p>Na aba login, temos 2 Input, 2 Labels para esses input e um botão de login, ao preencher os input's com o email e senha usados para cadastrar o usuario o login é realizado pela rota /api/login, apos o login ser realizado as informações cadastradas pelo usuario são mostradas na tela pela rota /api/info</p>

<p>Quando as informações forem apresentadas na tela dois novos botões serão aprensentandos, o 'Editar' e o 'Remover'</p>

<p>Quando o botão Editar for clicado mais 5 inputs serão apresentados na tela para que o usuario edite suas informações cadastradas e o botão 'Editar' agora sera o 'Salvar', quando o botão salvar for clicado as novas informaçõe do usuario serão armazenadas no banco de dados MySQL pela rota /api/edit</p>

<p>Quando o botão Remover for clicado todas as informações cadastradas pelo usuario serão apagadas do banco de dados MySQL pela rota /api/delete</p>

<h2>MODO DE USO</h2>

<h3>GIT</h3>
<hr>

<p>FAÇA O DOWNLOADS DO REPOSITORIO OU USE:<br><code>git clone git@github.com:joaov1ct0r/cadLoginSys.git</code></p>

<h3>DEPENDENCIAS</h3>
<hr>

<p>INSTALE TODAS AS DEPENDENCIAS COM O COMNADO: <code>npm install</code></p>

<h3>VARIAVEIS DE AMBIENTE</h3>
<hr>

<p>CRIE UM ARQUIVO .env NA PASTA PRINCIPAL DO PROJETO E ADICIONE SEUS DADOS AS VARIAVEIS</p>

<ul>
<li>SERVER_PORT = PORTA DO SEU SERVIDOR</li>
<li>DB_HOST = HOST DO SEU DB</li>
<li>DB_USER = USUARIO DO SEU DB</li>
<li>DB_PASSWORD = SENHA DO SEU DB</li>
<li>DB_DATABASE = NOME DO SEU DB</li>
<li>DB_PORT = PORTA DO SEU DB</li>
<li>JWT_TOKEN_SECRET = SEGREDO DO SEU JWT</li>
</ul>

<h3>MySQL</h3>
<hr>

<p>INICIE O SEU SERVIDOR MYSQL COM O COMANDO:<br><code>sudo systemctl start mysql</code></p>

<p>CRIE UM BANCO DE DADOS ATRAVES DO TERMINAL OU COM OUTRO GERENCIADOR DE BANCO DE DADOS, COM O NOME DE: cadLoginSys COM O COMANDO:<br><code>CREATE DATABASE cadLoginSys;</code></p>

<p>APOS CRIAR O BANCO DE DADOS USE-O COM O COMANDO: <br><code>USE cadLoginSys;</code>

<p>APOS INICIAR O SERVIDOR O SEQUELIZE CRIARA A TABELA DENTRO DO SEU BANCO DE DADOS</p>

<h3>SERVER</h3>
<hr>

<p>APOS TER OS ARQUIVOS EM SUA MAQUINA INICIE O SERVIDOR WEB NO SEU TERMINAL COM O COMANDO:<br><code>npm start</code></p>

<p>APOS ISSO ABRA O NAVEGADOR E ENTRE COM A SEGUINTE URL:<br><code>http://localhost:3000/</code></p>

<p>A PAGINA PARA O CADASTRO E LOGIN DE USUARIOS SERA ABERTA E ESTARA PRONTA PARA CRIAR, ARMAZENAR, EDITAR E EXCLUIR SEUS DADOS</p>

<h2>Picture</h2>

![cadsys](https://user-images.githubusercontent.com/79015823/146680225-a44bb9b0-e1b3-4695-bed9-04823e565aae.jpg)

![loginsys](https://user-images.githubusercontent.com/79015823/146680232-40def1fe-03a2-49b9-9a1f-4aa5a87ba409.jpg)

![infosys](https://user-images.githubusercontent.com/79015823/146680233-c6fe5e2c-f50b-4447-89cb-2f03401529b7.jpg)
