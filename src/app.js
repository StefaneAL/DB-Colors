const express = require("express")
const mongoose = require("mongoose")
const app = express()
const index = require("./routes/index")
const skills = require ("./routes/hardSkills.routes")
const user = require ("./routes/users.routes")
const db = require("../src/data/database")
const cors = require("cors")

db.connect()

app.use(express.json())
app.use(cors())

app.use("/", index)
app.use("/skill", skills)
app.use("/user", user)

module.exports = app