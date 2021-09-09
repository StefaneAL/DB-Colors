const mongoose = require('mongoose')
const User = require('../models/user')
const bcryt = require('bcrypt')
const jwt =  require('jsonwebtoken')
const SECRET = process.env.SECRET

//ok
const getAll = async(req,res) => {
    const user = await User.find()
    res.status(200).json(user)
    console.log(User)
}

//Ok
const getId = async (req,res)=>{
    const userId = req.params.id
    const userById = await User.findById(userId)
    if(userById == null){
        return res.status(404).json({message: "User não encontrado 🤷‍♀️"})
    }
    User.findOne(
        {id: userId},
        function(err){
            if(err){
                res.status(500).json({message: err.message})
            }else{
                res.status(200).json(userById)
            }
        })
}

//ok
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
    const UserExist = await User.findOne({cpf: req.body.cpf})
    if(UserExist){
        return res.status(409).json({err: 'Pessoa já cadastrada, tente entrar com seu email 😎'})
    }

    try{
        const newUser = await user.save()
        res.status(201).json(newUser)
    }catch(err){
        res.status(400).json({message: err.message})
    }
}

//ok
const deletUser = async(req, res)=>{
    const userId = req.params.id
    const user = await User.findById(userId)
    if(user == null){
        return res.status(404).json({message: "User não encontrade"})
    }
    user.deleteOne(
        {id:userId},
        function(err){
            if(err){
                res.status(500).json({message: err.message})
            }else{
                res.status(200).json({message: "User deletade com sucesso"})
            }
        }
    )
}

// colocar parametro para user não encontrado / para test 
const updateInfo = (req, res) => {
    const userId = req.params.id
    const infoReq = req.body
    const userById = await User.findById(userId)
    if(userById == null){
        return res.status(404).json({message: "User não encontrado 🤷‍♀️"})
    }
    User.findOneAndUpdate(userId, infoReq, {new: true}, (err, userUpdate)=> {
        if(err){
            return res.status(500).json({message: err.message})
        }else if(!userUpdate) {
            return res.status(404).json({message: "Informação não encontrada 🤷‍♀️"})
        }else{
            return res.status(200).json(userUpdate)
        }
    })
}

module.exports = {
    getAll,
    getId,
    createUser,
    deletUser,
    updateInfo
} 