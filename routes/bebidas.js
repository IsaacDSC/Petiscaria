const express = require('express')
const router = express.Router()


const Bebidas = require('../models/Bebidas')

router.get('/bebidas', (req, res) => {
    res.render('add/addBebidas')
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

router.get('/views', (req, res) => {
    res.render('vis-prod/vis-bebidas')
})


module.exports = router