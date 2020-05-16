const express = require('express')
const router = express.Router()

//adionando models
const EstoqueProduto = require('../models/EstoqueProduto')


router.get('/', (req, res) => {
    res.render('addProd/addProd1')
})

router.post('/addProdEstoque', (req, res) => {
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
        //res.send('Enviado com sucesso')
        req.flash('success_msg', 'Produto Adionado com sucesso!')
        res.redirect('/addProd')
    }).catch((err) => {
        //res.send('error: ' + err)
        req.flash('error_msg', 'Erro ao Enviar formulário, por favor complete os campos corretamente')
        res.redirect('/addProd')
    })
})

router.post('/addAperitivo', (req, res) => {

})

module.exports = router