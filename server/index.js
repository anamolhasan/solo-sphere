const express = require('express')
const cors = require('cors')
require('dotenv').config()
const port = process.env.PORT || 3000

const app = express()


app.get('/', (req, res) => {
    res.send('server is running...')
})


app.listen(port, ()=>{
    console.log(`server is running http://localhost:${port}`)
})
