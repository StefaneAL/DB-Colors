const mongoose = require('mongoose')
const User = require('../models/user')
const bcryt = require('bcrypt')
const jwt =  require('jsonwebtoken')
const SECRET = process.env.SECRET

//não popula 
const getAll = async(req,res) => {
    const user = await User.find().populate("hardSkill")
    res.status(200).json(user)
}

//falta avisar que não encontrou id
const getId = async (req,res)=>{
    const userId = req.params.id
    const userById = await User.findById(userId)
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

// não consigo add mais de uma skill
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

// não encontro o id 
const updateInfo = (req, res) => {
    const userId = req.params.id
    User.findOne({id: userId}, function(err,userFound){
        if(err){
            res.status(500).send({
                message: err.message
            })
        }else{
            if(userFound){
                User.updateOne(
                    {id: userId},
                    {$set: req.body},
                    function(err){
                        if(err){
                            res.status(500).send({
                                message: err.message
                            })  
                        }else{
                            res.status(200).send({
                                message: "Campo alterado com sucesso"
                            })
                        }
                    })
            }else{
                res.status(404).send({
                    message: "User não encontrado para ser atualizado"
                })
            }
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