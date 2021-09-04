const express = require("express")
const cors = require("cors")

const app = express();
require('dotenv-safe').config()
const PORT = process.env.PORT || 8585
//conectar ao db
const db = require('./src/data/database')
db.connect()

app.use(cors())
//usa aws rotas 
app.use(express.json())

const empresasRouter = require('./src/routes/users.routes')
app.use('/user', empresasRouter)

const hardSkillsRouter = require('./src/routes/hardSkills.routes')
app.use('/skills', hardSkillsRouter)

//definir endPoints de cada rute

app.listen(PORT, ()=> console.log(`listening on port ${PORT}`))