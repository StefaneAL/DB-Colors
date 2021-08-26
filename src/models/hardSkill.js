const mongoose = require('mongoose')

const hardSkillSchema = new mongoose.Schema({
    _id: mongoose.Type.Object,
    nome: {
        type: String,
        require: true
    },
    descricao:{
        type: String,
        require: true
    },
    criadoEm: {
        type: Date,
        require: true,
        default: new Date
    }
},{
    versionKey: false
})


module.exports = mongoose.model('hardSkill', hardSkillSchema)