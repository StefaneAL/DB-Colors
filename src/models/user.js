const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    nome: {
        type: String,
        required: true
    },
    cpf:{
        type: String,
        required: true
    },
    local: {
        type: String,
        required: true    
    },
    hardSkills:[{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'hardSkill'
    }],
    email:{
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true    
    },
    criadoEm: {
        type: Date,
        required: true,
        default: new Date
    }
},{
    versionKey: false
})


module.exports = mongoose.model('user', userSchema)