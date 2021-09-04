const express = require("express")

require('dotenv-safe').config()
const PORT = process.env.PORT || 8585
const db = require('./src/data/database')
const app = express();
const cors = require("cors")
db.connect()

app.use(cors())

//usa aws rotas 
app.use(express.json())

const userRouter = require('./src/routes/users.routes')
app.use('/user', userRouter)

const hardSkillsRouter = require('./src/routes/hardSkills.routes')
app.use('/skills', hardSkillsRouter)

//definir endPoints de cada rute

app.listen(PORT, ()=> console.log(`listening on port ${PORT}`))