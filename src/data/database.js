const mongoose = require("mongoose")
const MONGOURL = process.env.MONGODB_URL
const SECRET = process.env.SECRET

const connect = () => {mongoose.connect(
    MONGOURL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log(`Database conectada com sucesso.`))
    .catch(err => console.err)
}
module.exports = { connect }