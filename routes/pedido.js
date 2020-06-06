const express = require('express')
const router = express.Router()

//adionando models
const Aperitivos = require('../models/Aperitivos')
const Pedidos = require('../models/Pedidos')
const Bebidas = require('../models/Bebidas')
const OpcaoAperitivo = require('../models/OpcaoAPeritivo')
const HotDog = require('../models/HotDog')
const Clientes = require('../models/Clientes')

router.get('/', (req, res) => {
    Aperitivos.findAll().then((aperitivos) => {
        Bebidas.findAll().then((bebidas) => {
            OpcaoAperitivo.findAll().then((opc) => {
                HotDog.findAll().then((hotdog) => {
                    Clientes.findAll().then((clientes) => {

                        res.render('pedido/montarPedido', { aperitivos: aperitivos, bebidas: bebidas, opc: opc, hotdog: hotdog, clientes: clientes })
                    })
                })
            })
        })
    })

})

router.post('/env-pedidos', (req, res) => {
    Pedidos.create({
        valorEntrega: req.body.valorEntrega,
        tamanhoPetisco: req.body.tamanhoPetisco,
        opc01: req.body.opc01,
        opc02: req.body.opc02,
        obsPetisco: req.body.observacao,
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