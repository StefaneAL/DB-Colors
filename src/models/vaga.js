const mongoose = require('mongoose')

const vagaSchema = new mongoose.Schema({
    _id: mongoose.Type.Object,
    criadoEm: {
        type: Date,
        required: true,
        default: new Date
    },
    titulo: {
        type: String,
        required: true
    },
    descricao:{
        type: String,
        required: true
    },
    local: {
        type: String,
        required: true    
    },
    vinculo:{
        type: String,
        required: true    
    },
    cargaHoraria:{
        type: String,
        required: true 
    },
    empresa:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'empresa'
    }
},{
    versionKey: false
})


module.exports = mongoose.model('vaga', vagaSchema)