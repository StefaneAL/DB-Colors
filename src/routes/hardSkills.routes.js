const express = require('express')
const router = express.Router()
const controller = require('../controllers/hardSkillsController')

router.get("/oi", (req,res)=>{
    res.status(200).send({"message": "oi eu existo"})
})
router.get("/all", controller.getAll)

router.get('/:id', controller.getId)

router.post("/create", controller.createSkill)

router.delete('/:id', controller.deleteSkill)

//router.patch('/:id', controller.updateInfo)

module.exports = router