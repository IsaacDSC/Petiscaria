const express = require('express')
const router = express.Router()

//adionando models
const Aperitivos = require('../models/Aperitivos')


router.get('/', (req, res) => {
    Aperitivos.findAll().then((aperitivos) => {
        res.render('pedido/montarPedido', { aperitivos: aperitivos })
    })

})

router.post('/pedido', (req, res) => {
    EstoqueProduto.create({
        nome: req.body.nameProd,
        marca: req.body.marcaProd,
        validade: req.body.dtValidProd,
        uniMedida: req.body.uniMedidaProd,
        quantidade: req.body.quantidadeProd,
        gastoemPedido: req.body.gastoProdPedido,
        valor: req.body.valorProd,
        rendimento: req.body.rendimentoProd,
        rendimento1: req.body.rendimentoProd1
    }).then(() => {
        req.flash('success_msg', 'Pedido enviado com sucesso!')
        res.redirect('/montarpedido')
    }).catch((err) => {
        req.flash('Erro ao cadastrar, por favor preencha corretamente os campos!')
        res.redirect('/montarpedido')
    })
})



module.exports = router