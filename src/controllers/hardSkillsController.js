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
    if(skillById == null){
        return res.status(404).json({message: "User não encontrado 🤷‍♀️"})
    }
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

//colocar parametro para user não encontrado / para test 
const updateInfo = async (req, res) => {
    const skillId = req.params.id 
    const infoReq = req.body;
    const skillById = await Skill.findById(skillId)
    if(skillById == null){
        return res.status(404).json({message: "User não encontrado 🤷‍♀️"})
    }
    Skill.findByIdAndUpdate(skillId, infoReq, { new: true }, (err, skillUpdate) => {
        if (err) {
            return res.status(424).json(
                { message: err.message });
        } else if (!skillUpdate) {

            return res.status(404).json({message: "Registro não encontrado 🤷‍♀️"});
        } else { return res.status(200).json(skillUpdate) }
    });
   
}



module.exports ={
    getAll,
    getId,
    deleteSkill,
    createSkill,
    updateInfo
}