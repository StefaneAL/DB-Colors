const mongoose = require("mongoose")
const MONGO_URL = process.env.MONGODB_URI || process.env.MONGODB_URL
const SECRET = process.env.SECRET

const connect = () => {mongoose.connect(
    MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log(`Database conectada com sucesso.`))
    .catch(err => console.err)
}
module.exports = { connect }