const app = require('./server.js')
require('dotenv').config()

const PORT = process.env.PORT || 3000

app.listen(app.get('port'),()=>{
    console.log(`Server on port ${PORT}`)
})
