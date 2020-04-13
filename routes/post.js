'use strict'
const express = require('express')
const router = express.Router()
const modelPost = require('../models/post')

//Rotas
router.get('/formularioPostagem', function(req, res) {
    res.render('formulario')
})

router.post('/cadastrarPostagem', function(req, res) {
    const {body} = req
    modelPost.cadastrarPostagem(body, function(erro){
        if (erro) { 
            return res.send('Houve um erro: ' + erro)
        }
        res.send('Postagem Cadastrada com Sucesso')
    })
})

module.exports = router