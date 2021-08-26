const express = require("express")
const app = express();
require('dotenv-safe').config()
const PORT = 8585
//conectar ao db
const db = require('./src/data/database')
db.connect()

//usa aws rotas 
app.use(express.json())

const empresasRouter = require('./src/routes/empresas.routes')
app.use('/empresa', empresasRouter)

const hardSkillsRouter = require('./src/routes/hardSkills.routes')
app.use('/skills', hardSkillsRouter)

const vagasRouter = require('./src/routes/vagas.routes')
app.use('./vagas', vagasRouter)

//definir endPoints de cada rute

app.listen(PORT, ()=> console.log(`listening on port ${PORT}`))