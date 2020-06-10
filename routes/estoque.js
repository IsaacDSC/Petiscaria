const express = require('express')
const router = express.Router()

const Estoque = require('../models/Estoque')

router.get('/produto', (req, res) => {
    res.render('add/addProd')
})

router.post('/cadastrar', (req, res) => {
    Estoque.create({
        nome: req.body.nameProd,
        marca: req.body.marcaProd,
        desc: req.body.desc,
        validade: req.body.dtValidProd,
        quantidade: req.body.quantidadeProd,
        uniMedida: req.body.uniMedidaProd,
        valor: req.body.valorProd,
    }).then(() => {
        //res.send('Enviado com sucesso')
        req.flash('success_msg', 'Produto Adionado com sucesso!')
        res.redirect('/estoque/produto')
    }).catch((err) => {
        //res.send('error: ' + err)
        req.flash('error_msg', 'Erro ao Enviar formulário, por favor complete os campos corretamente')
        res.redirect('/estoque/produto')
    })
})

router.get('/views', (req, res) => {
    Estoque.findAll().then((produtos) => {
        res.render('vis-prod/vis-estoque', { produtos: produtos })
    })
})

router.post('/edit', (req, res) => {
    Estoque.findOne({ id: req.body.id }).then((produto) => {
        res.render('edit-prod/editProd', { produto: produto })
    })
})

router.post('/editado', (req, res) => {
    Estoque.findOne({ id: req.body.id }).then((produto) => {
        produto.nome = req.body.nameProd,
            produto.marca = req.body.marcaProd,
            produto.desc = req.body.desc,
            produto.validade = req.body.dtValidProd,
            produto.quantidade = req.body.quantidadeProd,
            produto.uniMedida = req.body.uniMedidaProd,
            produto.valor = req.body.valorProd,

            produto.save().then(() => {
                req.flash('success_msg', 'Produto Editado com Sucesso!')
                res.redirect('/estoque/views')
            }).catch((err) => {
                req.flash('error_msg', err)
                res.redirect('/estoque/views')
            })

    })
})

router.post('/delete', (req, res) => {
    Estoque.findOne({ id: req.body.id }).then((produto) => {
        produto.destroy().then(() => {
            req.flash('success_msg', 'Produto Editado com Sucesso!')
            res.redirect('/estoque/views')
        }).catch((err) => {
            req.flash('error_msg', err)
            res.redirect('/estoque/views')
        })
    })
})



module.exports = router