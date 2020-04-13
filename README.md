Brincando com Node JS e git.

1- Realizar o download e Instalar o Node JS para seu sistema Operacional, link: https://nodejs.org/en/download/
    1.1- Baixar pacote nodemon utilizar parametro -g para salvar globalmente o pacote.
        npm install nodemon -g --save

2- Instalar os pacotes necessário para trabalhar: express.
    npm install express --save.

3- Dentro da pasta node_modules possui todos os pacotes necessários para a utilização do projeto.

4- Criar um serviço http com express:
    4.1 - Primeiro é realizado a importação do modulo express para dentro da aplicação:
        const express = require('express');
    
    4.2 - Segundo é criado outra constante para armazenar a função express():
        const app = express();

    4.3 - Por ultimo é realizado a inicialização do serviço em uma porta específica:
        app.listen(8081);
        ***Observação: sempre fazer a inicialização na ultima linha do script pois será anulado tudo o que vem 
        depois do 'app.listen(porta);
        4.3.1 - a função aceita uma função de callback para ser realizado após o término da primeira função.
            ex: app.listen(8081, function() {
                console.log('Servidor rodando na porta 8081.')
            })   



Rotas:

Para utilizar rotas no serviço existem os métodos http por exemplo: GET, POST, DELETE etc...
exemplo:
app.get('/rota', function(req, res) {
    res.status(200).send(
        mensagem....
    )
})

o mesmo serve para os demais métodos, para visualizar acesse: https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods.

Utilizando e Acessando parametros da rota:

Parametros são valores passados para uma rota que ja esta prevista para recebe-las exemplo:
no script: app.get('rotas/:maringa', function(req, res){
    mensagem: 'acessando rota de ' + req.params.maringa 
})

se passar o nome do parametro para o método req.params.nomeParametro, sera retornado o valor passado no link.
se nao passado ex: 'req.params' sera retornado um objeto com os valores dos parametros.
{
    valor passado: localhost:8081/maringa/parana
    script: 
    app.get('rotas/:cidade/:estado', function(req, res){
        'Cidade ' req.params.cidade + ' Estado: ' + req.params.estado
    })

    retorno: Cidade maringa estado parana.

    script: 
    app.get('rotas/:cidade/:estado', function(req, res){
        req.params
    })

    retorno:
    cidade: maringa,
    estado: parana

}

ENVIANDO ARQUIVOS NA RESPOSTA:

com o método sendFile() podemos enviar um arquivo para quando fizerem uma requisição, por exemplo:
    
    app.get('/', function(req, res){
        res.sendFile(__dirname + '/html/index.html') // Enviando um arquivo na pasta local pelo 'dirname' e caso tiver mais caminhos inseri-los.
    })


# SEQUELIZE:

Sequelize é um modulo para trabalhar com banco de dados no node js.

Forma de utilizar simples:

const Sequelize = require('sequelize') // Feito a importação do módulo para o script.
const sequelize = new Sequelize('banco', 'usuario', 'senha', {
    // configuracoes do banco local e tipo de banco:
    host: 'localhost',
    dialect: 'mysql'
}) // criando conexao com banco.

sequelize.authenticate().then({
    console.log('Conectado com sucesso!')
}).catch(function(erro){
    console.log('Erro ao conectar ' + erro)
}) // Validando CONEXAO, Sucesso ou erro.

# DEFININDO E CRIANDO TABELA COM SEQUELIZE:

    DEFININDO DADOS DA TABELA:

declara-se uma variavel com conteúdo os dados da tabela (nome e estrutura):
Para a estrutura é criado um objeto contendo atributos(colunas) e para cada atributo(coluna) declara-se o tipo ou objeto com basicamente 
os atributos desta coluna (ATRIBUTOS VIDE: https://sequelize.org/v3/api/datatypes/)

const Usuarios = sequelize.define('usuarios', {
    // Exemplo 1:
    nome: Sequelize.STRING,

    // Exemplo 2:
    nome: {
        type: Sequelize.STRING
    } 
})

// CRIANDO TABELA:
Usuarios.sync({
    force: true // dropa a tabela se existir e cria.
})

INSERINDO DADOS NA TABELA:

Usuarios.create({
    nome: 'Douglas Sumita'
})


# HANDLEBARS

instalacao: npm install --save express-handlebars
        