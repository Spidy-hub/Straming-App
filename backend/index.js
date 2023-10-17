const express = require('express')
const app = express()
require("./config/db")
require('dotenv').config()
const cookieParser = require('cookie-parser');
const cors = require('cors')
const route = require('./route/route')


app.use(cors())
app.use(express.json())
app.use(cookieParser());


app.get('/', (req, res) => {
    res.send("home")
})
app.get('/login',(req, res) => {
    console.log(req.body)
})
app.get('/register',(req, res) => {
    console.log(req.body)
})

app.use("/", route)

//PORT CONNECTED 

app.listen(process.env.PORT, () => {
    console.log(`Server runnning successfully at http://localhost:${process.env.PORT}`)
})