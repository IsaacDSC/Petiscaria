const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')
const path = require('path')
const session = require('express-session')
const flash = require('connect-flash')
const passport = require('passport')


const home = require('./routes/home')
const finance = require('./routes/finance')
const pedido = require('./routes/pedido')
const add = require('./routes/add')
const hotDog = require('./routes/hotdog')

//configurando body-parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
    //configurando handlebars
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
    //adionando pasta public
app.use(express.static(path.join(__dirname, 'public')))
    //configurando session
app.use(session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    }))
    //configurando passport
app.use(passport.initialize())
app.use(passport.session())
    //configurando flash
app.use(flash())
    //configurando midleware flash
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    next()
})

app.use('/', home)
app.use('/finance', finance)
app.use('/pedido', pedido)
app.use('/add', add)
app.use('/hotdog', hotDog)




const Port = 3000
app.listen(Port, () => {
    console.log(`http://localhost:${Port} `)
    console.log('BREAK SERVER ctrl + c')
})