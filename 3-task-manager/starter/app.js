const express = require("express")
const app = express()

const tasks = require('./routes/tasks')
const connectDB = require('./database/connect')
require("dotenv").config()

const notFound = require("./middlewares/not-found")
const errorHandlerMiddleware = require("./middlewares/error-handler")

const MONGO_URI = process.env.MONGO_URI;
// middleware
app.use(express.json())
app.use(express.static('./public'))

// routes
app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)
// app.get("api/v1/tasks", (req, res) => {})
// app.post("api/v1/tasks", (req, res) => {})
// app.get("api/v1/tasks/:id", (req, res) => {})
// app.patch("api/v1/tasks/:id", (req, res) => {})
// app.delete("api/v1/tasks/:id", (req, res) => {})

const PORT = process.env.PORT || 4000;
const start = async () => {
    try {
        await connectDB(MONGO_URI)
        app.listen(PORT, console.log(`server is listening on port ${PORT}`))
    } catch (error) {
        throw Error(error)
    }
}
start()