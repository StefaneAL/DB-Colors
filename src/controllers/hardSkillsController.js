const mongoose = require('mongoose')
const Skill = require("../models/hardSkill");
const bcryt = require('bcrypt')
const jwt =  require('jsonwebtoken')
const SECRET = process.env.SECRET

//ok
const getAll = async(req, res) =>{
    const skills = await Skill.find()
    res.status(200).json(skills)
}

//ok
const getId = async (req,res)=>{
    const skillId = req.params.id
    const skillById = await Skill.findById(skillId)
    Skill.findOne({id:skillId},
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
    const skill = new Skill({
        _id: mongoose.Types.ObjectId(),
        nome: req.body.nome,
        descricao: req.body.descricao,
        criadoEm: req.body.criadoEm
    })
    const skillExist = await Skill.findOne({nome: req.body.nome})
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
    const skill = await Skill.findById(skillId)
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

// não reconhece id cai na rota de não esncontrada
const updateInfo = (req, res) => {
    const skillId = req.params.id
    Skill.findOne({id: skillId}, function(err,skillFound){
        if(err){
            res.status(500).send({
                message: err.message
            })
        }else{
            if(skillFound){
                Skill.updateOne(
                    {id: skillId},
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
                    message: "Skill não encontrado para ser atualizado"
                })
            }
        }
    })
}

// const updateInfo = async(req, res) =>{
//     const skillId = req.params.id
//     Skill.findOne({id:skillId},function(err, skillFound){
//         if(err){
//             res.status(500).json({
//                 message: err.message
//             })
//         }else{
//             if(skillFound){
//                 Skill.updadeOne(
//                     {id: skillId},
//                     {$set: req.body},
//                     function(err){
//                         if(err){
//                             res.status(500).json({
//                                 message: err.message
//                             })
//                         }else{
//                             res.status(200).json({
//                                 message: "Campo alterado com sucesso ✔"
//                             })
//                         }
//                     })
//             }else{
//                 res.status(404).json({message:"Skill não encontrado para ser atualizado"})
//             }
//         }
//     })
//  }

module.exports ={
    getAll,
    getId,
    deleteSkill,
    createSkill,
    updateInfo
}