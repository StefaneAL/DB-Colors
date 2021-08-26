const mongoose = require('mongoose')

const empresaSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId ,
    nome: {
        type: String,
        required: true
    },
    cnpj:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true    
    },
    senha:{
        type: String,
        required: true    
    },
    criadoEm: {
        type: Date,
        required: true,
        default: new Date
    },
},{
    versionKey: false
})


module.exports = mongoose.model('empresa', empresaSchema)