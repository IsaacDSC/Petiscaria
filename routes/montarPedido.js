const express = require('express')
const router = express.Router()

//adionando models



router.get('/', (req, res) => {
    res.render('pedido/montarPedido')
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

    })
})

module.exports = router