const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const cors = require("cors")
const PORT = process.env.PORT
const logger = require("./utils/Logging")
const indexRoute = require("./routes/index")
const { connectDB } = require("./config/db")
connectDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/", indexRoute)

app.listen(PORT, logger.info(`Server is Running on http://localhost:${PORT}`))