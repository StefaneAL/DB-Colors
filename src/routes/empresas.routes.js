const express = require('express')
const router = express.Router()
const controller = require('../controllers/empresasControllers')

router.get('/all', controller.getAll)

router.post('/create', controller.createEnterprise)

module.exports = router