const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')
const path = require('path')


const home = require('./routes/home')
const finance = require('./routes/finance')


//configurando body-parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
    //configurando handlebars
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
    //adionando pasta public
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', home)
app.use('/finance', finance)

const Port = 3000
app.listen(Port, () => {
    console.log(`http://localhost:${Port} `)
    console.log('BREAK SERVER ctrl + c')
})