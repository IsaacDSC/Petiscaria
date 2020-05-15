const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.render('finance/finance')
})



module.exports = router