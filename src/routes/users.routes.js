const express = require('express')
const router = express.Router()
const controller = require('../controllers/usersControllers')

router.get('/all', controller.getAll)

router.get('/:id', controller.getId)

router.post('/create', controller.createUser)

router.delete('/:id', controller.deletUser)

router.put('/update/:id', controller.updateInfo)

module.exports = router