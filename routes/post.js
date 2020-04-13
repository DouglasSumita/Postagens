'use strict'
const express = require('express')
const router = express.Router()
const modelPost = require('../models/post')

//Rotas

router.get('/deletarPostagem/:id', function(req, res) {
    modelPost.Post.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(){
        listarPosts(res)
    }).catch(function(error) {
        res.send('Esta Postagem não existe')
    })   
})

function listarPosts(res) {
    modelPost.Post.findAll({
        order: [['updatedAt', 'DESC']]
    }).then(function(posts){
        res.render('home', {posts: posts})
    })    
}
router.get('/', function(req, res){
    listarPosts(res)
})

router.get('/formularioPostagem', function(req, res) {
    res.render('formulario')
})

router.post('/cadastrarPostagem', function(req, res) {
    const {body} = req
    modelPost.cadastrarPostagem(body, function(erro){
        if (erro) { 
            return res.send('Houve um erro: ' + erro)
        }
        res.redirect('/')
    })
})

module.exports = router