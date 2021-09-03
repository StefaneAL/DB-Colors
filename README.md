# Projeto final {reprograma} `ON12 Back-end`
 
* Comecei criando uma nova connection `projetoFinal`
* Criei um DB `colorsDB`
* Criei a arquitetura e instalei todas as dependências 
```json
  "dependencies": {
    "bcrypt": "^5.0.1",
    "dotenv": "^10.0.0",
    "dotenv-safe": "^8.2.0",
    "express": "^4.17.1",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^5.13.7",
    "nodemon": "^2.0.12"
  }
```
* No `database.js` fiz a `require`do `mongoose` e o `process` do `.env`
 
* criei cada um dos `Schemas`
	* EMPRESA
	```javascript
    # Projeto final {reprograma} `ON12 Back-end`
 
* Comecei criando uma nova connection `projetoFinal`
* Criei um DB `colorsDB`
* Criei a arquitetura e instalei todas as dependências 
```json
  "dependencies": {
    "bcrypt": "^5.0.1",
    "dotenv": "^10.0.0",
    "dotenv-safe": "^8.2.0",
    "express": "^4.17.1",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^5.13.7",
    "nodemon": "^2.0.12"
  }
```
* No `database.js` fiz a `require`do `mongoose` e o `process` do `.env`
 
* ## Criei cada um dos `Schemas`

* HARDSKILL

```javascript
const mongoose = require('mongoose')

const hardSkillSchema = new mongoose.Schema({
    _id: mongoose.Type.Object,
    nome: {
        type: String,
        require: true
    },
    descricao:{
        type: String,
        require: true
    },
    criadoEm: {
        type: Date,
        require: true,
        default: new Date
    }
},{
    versionKey: false
})


module.exports = mongoose.model('hardSkill', hardSkillSchema)
```
  
* USER
```javascript
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
    empresa:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'empresa'  
    },
    hardSkills:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'hardSkill'
    },
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
```
 
criei os `controllers` 
no server conectei ao db e comecei a escrever as rotas




*Sabado dia 28/08 Aula inicial do ProjetoFinal*

*Sexta dia 10/09 finalizaçã e entrega de projeto*

*Sabado dia 11/09 apresentação*
