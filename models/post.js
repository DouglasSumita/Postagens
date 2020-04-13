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

function cadastrarPostagem(postagem) {
    Post.create({
        titulo: postagem.titulo,
        conteudo: postagem.conteudo
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