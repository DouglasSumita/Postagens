const db = require('./db');

//Definição da tabela
const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})

function cadastrarPostagem(postagem, callback) {
    Post.create({
        titulo: postagem.titulo,
        conteudo: postagem.conteudo
    }).then(function(){
        callback(null)
    }).catch(function(error) {
        callback(error)
    })
}
// Criação da tabela
// Post.sync({
//     force: true
// })

module.exports = { 
    Post,
    cadastrarPostagem
}