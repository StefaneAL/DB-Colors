const mongoose = require('mongoose')
const Empresa = require('../models/empresa')
const bcryt = require('bcrypt')
const jwt =  require('jsonwebtoken')
const SECRET = process.env.SECRET

//OK
const getAll = async(req,res) => {
    const empresa = await Empresa.find()
    res.status(200).json(empresa)
}
//OK
const createEnterprise = async (req,res) =>{
    const senhaHash = bcryt.hashSync(req.body.senha,10)
    req.body.senha = senhaHash

    const empresa = new Empresa({
        _id: mongoose.Types.ObjectId() ,
        nome: req.body.nome,
        cnpj: req.body.cnpj,
        email: req.body.email,
        senha: req.body.senha,
        criadoEm:req.body.criadoEm
    })
    const enterpriseExist = await Empresa.findOne({cnpj: req.body.cnpj})
    if(enterpriseExist){
        return res.status(409).json({err: 'Empreja já cadastrada'})
    }

    try{
        const newEnterprise = await empresa.save()
        res.status(201).json(newEnterprise)
    }catch(err){
        res.status(400).json({message: err.message})
    }
}

module.exports = {
    getAll,
    createEnterprise
}