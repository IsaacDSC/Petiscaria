const express = require('express')
const router = express.Router()

//adionando models
const Aperitivos = require('../models/Aperitivos')


router.get('/add', (req, res) => {
    res.render('add/addAperitivo')
})

//adionando aperitivo
router.post('/cadastrar', (req, res) => {
    Aperitivos.create({
        nome: req.body.nomeAperitivo,
        descricao: req.body.descAperitivo,
        valor: req.body.valorAperitivo,
        valorGasto: req.body.gastoAperitivo
    }).then(() => {
        //res.send('Enviado com sucesso!')
        req.flash('success_msg', 'Aperitivo Adionado com sucesso!')
        res.redirect('/add/aperitivo')
    }).catch((err) => {
        //res.send('error: ' + err)
        req.flash('error_msg', 'Erro ao Enviar formulário, por favor complete os campos corretamente')
        res.redirect('/add/addProd')
    })
})

//adionando opc de aperitivo
router.post('/cadastrar_opc', (req, res) => {
    OpcaoAperitvo.create({
        nome: req.body.nome,
        valor: req.body.valor,
        valorGasto: req.body.gasto
    }).then(() => {
        req.flash('success_msg', 'Opção Aperitivo Cadastrado com Sucesso!')
        res.redirect('/add/aperitivo')
    }).catch((err) => {
        //res.send('error: ' + err)
        req.flash('error_msg', 'Erro ao Enviar formulário, por favor complete os campos corretamente')
        res.redirect('/add/addProd')
    })
})


router.get('/views', (req, res) => {
    Aperitivos.findAll().then((aperitivos) => {
        res.render('vis-prod/vis-aperitivo', { aperitivos: aperitivos })
    }).catch((err) => {
        res.send('error' + err)
    })
})

router.get('/edit', (req, res) => {
    Aperitivos.findAll().then((aperitivos) => {
        res.render('edit-prod/editAperitivo', { aperitivos: aperitivos })
    })
})


router.post('/cadastrarEdit', (req, res) => {
    Aperitivos.findOne({ id: req.body.id }).then((aperitivos) => {
        aperitivos.nome = req.body.nomeAperitivo,
            aperitivos.descricao = req.body.descAperitivo,
            aperitivos.valor = req.body.valorAperitivo,
            aperitivos.valorGasto = req.body.valorGasto,

            aperitivos.save().then(() => {
                req.flash('success_msg', 'Aperitivo Editado com sucesso!')
                res.redirect('/add/edit-aperitivo')
            }).catch((err) => {
                res.send('Error:' + err)
            })
    })
})


module.exports = router