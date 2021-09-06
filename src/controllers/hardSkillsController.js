const mongoose = require('mongoose')
const HardSkill = require('../models/hardSkill')
const bcryt = require('bcrypt')
const jwt =  require('jsonwebtoken')
const SECRET = process.env.SECRET

//ok
const getAll = async(req, res) =>{
    const skills = await HardSkill.find()
    res.status(200).json(skills)
}

//ok
const getId = async (req,res)=>{
    const skillById = await HardSkill.findById(req.params.id)
    HardSkill.findOne({id:req.params.id},
        function(err){
            if(err){
                res.status(500).send({message: err.message})
            }else{
                res.status(200).send(skillById)
            }
        })
}

//ok
const createSkill = async(req, res) =>{
    const skill = new HardSkill({
        _id: mongoose.Types.ObjectId(),
        nome: req.body.nome,
        descricao: req.body.descricao,
        criadoEm: req.body.criadoEm
    })
    const skillExist = await HardSkill.findOne({nome: req.body.nome})
    if(skillExist){
        return res.status(409).json({err: 'Skill já existe. Tente encontrar na lista 😉'})
    }

    try{
        const newSkill = await skill.save()
        res.status(201).json(newSkill)
    }catch(err){
        res.status(400).json({message: err.message})
    }
}

//ok
const deleteSkill = async (req,res)=>{
    const skillId = req.params.id
    const skill = await HardSkill.findById(skillId)
    if(skill == null){
        return res.status(404).json({message: "Skill não encontrada"})
    }
    skill.deleteOne(
        {id: skillId},
        function(err){
            if(err){
                res.status(500).json({message: err.message})
            }else{
                res.status(200).json({message: "Skill deletada com sucesso"})
            }
        }
    )
}

const updateInfo = async(req, res) =>{
    const skillId = req.params.id
    HardSkill.findOne({id:skillId},function(err, skillFound){
        if(err){
            res.status(500).json({
                message: err.message
            })
        }else{
            if(skillFound){
                HardSkill.updadeOne(
                    {id: skillId},
                    {$set: req.body},
                    function(err){
                        if(err){
                            res.status(500).json({
                                message: err.message
                            })
                        }else{
                            res.status(200).json({
                                message: "Campo alterado com sucesso ✔"
                            })
                        }
                    }
                )
            }else{
                res.status(404).json({message:"Skill não encontrado para ser atualizado"})
            }
        }
    })
 }

module.exports ={
    getAll,
    getId,
    deleteSkill,
    createSkill,
    updateInfo
}