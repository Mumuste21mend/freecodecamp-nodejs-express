const express = require("express")
const logger = require('./logger')
const authorize = require('./authorize')
const app = express()

// req => middleware => res
// use vs route 
// our options - our own , express, third party  

// app.use("/api", [logger, authorize])
//app.use(express.static('./public'))
// morgan is a third party module   that has a middleware 
//app.use(morgan('tiny '))




app.get('/', (req, res) => {
    res.status(200).send("Home")
})



app.get('/about', (req, res) => {
    res.status(200).send("About")
})
app.get('/api/products', (req, res) => {
    res.status(200).send("Products")
})
app.get('/api/items', [logger, authorize], (req, res) => {
    res.status(200).send("Items")
})
app.listen(5000, () => {
    console.log("server is listening to port 5000 ... ")
})