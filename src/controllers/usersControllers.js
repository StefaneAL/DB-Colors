const mongoose = require('mongoose')
const User = require('../models/user')
const bcryt = require('bcrypt')
const jwt =  require('jsonwebtoken')
const SECRET = process.env.SECRET

//OK
const getAll = async(req,res) => {
    const user = await User.find().populate("hardSkill")
    res.status(200).json(user)
}
//OK
const createUser = async (req,res) =>{
    const senhaHash = bcryt.hashSync(req.body.senha,10)
    req.body.senha = senhaHash

    const user = new User({
        _id: mongoose.Types.ObjectId() ,
        nome: req.body.nome,
        cpf: req.body.cpf,
        local: req.body.local,
        hardSkills: req.body.hardSkills,
        email: req.body.email,
        senha: req.body.senha,
        criadoEm:req.body.criadoEm
    })
    const UserExist = await User.findOne({cnpj: req.body.cnpj})
    if(UserExist){
        return res.status(409).json({err: 'Empreja já cadastrada'})
    }

    try{
        const newUser = await user.save()
        res.status(201).json(newUser)
    }catch(err){
        res.status(400).json({message: err.message})
    }
}

module.exports = {
    getAll,
    createUser
}