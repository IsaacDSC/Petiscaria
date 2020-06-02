const express = require('express')
const router = express.Router()

//carregando models
const HotDog = require('../models/HotDog')

//rota do formulário para cadastrar hotdog
router.get('/add', (req, res) => {
        res.render('add/addHotDog')
    })
    //rota para receber formulário hotdog
router.post('/cadastrar', (req, res) => {
    HotDog.create({
        nome: req.body.nome,
        desc: req.body.desc,
        valorGasto: req.body.valorGasto,
        valorVendido: req.body.valorVendido
    }).then(() => {
        req.flash('success_msg', 'Hot-Dog Cadastrado com Sucesso!')
        res.redirect('/add/hotdog')
    }).catch((err) => {
        res.send('error: ' + err)
    })
})

//rota para visualizar hotdog
router.get('/views', (req, res) => {
        HotDog.findAll().then((hotdog) => {
            var lucro = hotdog.valorVendido - hotdog.valorVendido
            res.render('vis-prod/vis-hotdog', { hotdog: hotdog, lucro: lucro })

        })
    })
    //rota para formulário de editar hotdog
router.get('/edit', (req, res) => {
        HotDog.findAll({ id: req.body.id }).then((hotdog) => {
            res.render('edit-prod/editHotDog', { hotdog: hotdog })
        })
    })
    //rota para formulário de deletar hotdog
router.post('/delete', (req, res) => {
    HotDog.findOne({ id: req.body.id }).then((hotdog) => {
        hotdog.destroy().then(() => {
            req.flash('success_msg', 'Hot-Dog Deletado com Sucesso!')
            res.redirect('/add/views-hotdog')
        })
    }).catch((err) => {
        res.send('error: ' + err)
    })
})



module.exports = router