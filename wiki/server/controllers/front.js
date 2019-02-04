const express = require('express')
const router = express.Router()


router.get('/', function (req, res, next) {
    renderFront(res)
})

function renderFront(res) {
    res.render('pages/front')
}

module.exports = router