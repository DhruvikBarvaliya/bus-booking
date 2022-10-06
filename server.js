const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const PORT = process.env.PORT
const indexRoute = require("./routes/index")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/", indexRoute)

app.listen(PORT, console.log(`Server is Running on Port http://localhost:${PORT}`))