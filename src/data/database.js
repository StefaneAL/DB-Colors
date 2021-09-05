const mongoose = require("mongoose")
require("dotenv")
const MONGO_URL = process.env.MONGODB_URI || process.env.MONGODB_URL

const connect = () => {mongoose.connect(
    MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log(`Database conectada com sucesso.`)
    })
    .catch((error) => console.error(error))
}
module.exports = { connect }

