const express = require('express')
const router = express.Router()

//adionando models
const Aperitivos = require('../models/Aperitivos')
const Pedidos = require('../models/Pedidos')


router.get('/', (req, res) => {
    Aperitivos.findAll().then((aperitivos) => {
        res.render('pedido/montarPedido', { aperitivos: aperitivos })
    })

})

router.post('/env-pedidos', (req, res) => {
    Pedidos.create({
        nome: req.body.nome,
        telefone: req.body.telefone,
        bairro: req.body.bairro,
        rua: req.body.rua,
        residencia: req.body.residencia,
        complemento_ref: req.body.complemento_ref,
        tamanhoPetisco: req.body.tamanhoPetisco,
        opc01: req.body.opc01,
        opc02: req.body.opc02,
        opc03: req.body.opc03,
        bebidas: req.body.bebidas,
        qtdBebidas: req.body.qtdBebidas,
        observacao: req.body.observacao,
    }).then(() => {
        req.flash('success_msg', 'Pedido enviado com sucesso!')
        res.redirect('/pedido')
    }).catch((err) => {
        res.send('Error: ' + err)
            /* req.flash('Erro ao cadastrar, por favor preencha corretamente os campos!')
            res.redirect('/pedidos') */
    })
})



module.exports = router