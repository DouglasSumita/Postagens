const express = require('express')
const app = express()
const port = process.env.PORT || 8081
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const rotaPostagens = require('./routes/post')

// BODY PARSER
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

// Definindo para o express o template engine a ser utilizado.
//CONFIG 
    //Template Engine
app.engine('handlebars', handlebars({
    defaultLayout: 'main'
}) )
app.set('view engine', 'handlebars')

//ROTAS
app.use('/', rotaPostagens)

app.listen(port, function(){
    console.log('Servidor rodando na url http://localhost:' + port)
})