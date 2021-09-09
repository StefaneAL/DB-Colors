const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).send({
        "Message": "Bem vinde ao Banco de Talentos do TODAS AS LETRAS",
        "Objetivo": "Aqui voce encontra profissionais LGBTQIA+ ara que sua empresa possa ter realmente diversidade com TODAS AS CORES"
    })
})

module.exports = router;