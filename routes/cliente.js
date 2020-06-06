const express = require('express')
const router = express.Router()

//adionando models
const Clientes = require('../models/Clientes')


router.get('/', (req, res) => {
    res.render('cliente/cliente')
})


router.post('/cadastrar', (req, res) => {
    Clientes.create({
        nome: req.body.nome,
        telefone: req.body.telefone,
        bairro: req.body.bairro,
        rua: req.body.rua,
        residencia: req.body.residencia,
        complemento_ref: req.body.complemento_ref,
    }).then(() => {
        req.flash('success_msg', 'Cliente Cadastrado com Sucesso!')
        res.redirect('/pedido')
    }).catch((err) => {
        res.send('Error' + err)
    })
})



module.exports = router