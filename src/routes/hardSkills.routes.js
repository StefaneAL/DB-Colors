const express = require('express')
const router = express.Router()
const controller = require('../controllers/hardSkillsController')

router.get("/all", controller.getAll)

router.get('/:id', controller.getId)

router.post("/create", controller.createSkill)

//router.patch('/:id', controller.updateInfo)

module.exports = router