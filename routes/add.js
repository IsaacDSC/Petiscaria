const express = require('express')
const router = express.Router()

//adionando models
const Pedidos = require('../models/Pedidos')
const Bebidas = require('../models/Bebidas')
const OpcaoAperitvo = require('../models/OpcaoAPeritivo')



router.get('/bebidas', (req, res) => {
    res.render('add/addBebidas')
})


router.post('/pedidos', (req, res) => {
    Pedidos.findOne().then((pedidos) => {
        pedidos.nome = req.body.nome,
            pedidos.telefone = req.body.telefone,
            pedidos.bairro = req.body.bairro.telefone,
            pedidos.rua = req.body.rua,
            pedidos.numeroResidencia = req.body.numeroResidencia,
            pedidos.complemento_ref = req.body.complemento_ref,
            pedidos.produto01 = req.body.produto01,
            pedidos.produto01_valor = req.body.produto01_valor,
            pedidos.produto02 = req.body.produto02,
            pedidos.produto02_valor = req.body.produto02_valor,
            pedidos.observacao = req.body.observacao,


            pedidos.create().then(() => {
                req.flash('success_msg', 'Pedio enviado com sucesso!')
                res.redirect('/add/pedidos')
            }).catch((err) => {
                req.flash('error_msg', 'Erro ao cadastrar pedido, porfavor preencha corretamente os campos!')
                res.redirect('/')
            })

    })
})

router.post('/bebidas', (req, res) => {
    Bebidas.create({
        nome: req.body.nome,
        quantidade: req.body.quantidade,
        valorCompra: req.body.valorCompra,
        valorVenda: req.body.valorVenda,
        validade: req.body.validade,
        desc: req.body.desc,
    }).then(() => {
        req.flash('success_msg', 'Pedido enviado com sucesso!')
        res.redirect('/add/bebidas')
    }).catch((err) => {
        res.send('error: ' + err)
    })

})



module.exports = router