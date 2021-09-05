    const app = require("./src/app")
const PORT = process.env.PORT || 8585

app.listen(PORT, ()=> console.log(`listening on port ${PORT}`))

module.exports = app