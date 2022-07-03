const express = require("express")
const logger = require('../logger')
const authorize = require('../authorize')
const app = express()

// req => middleware => res
app.get('/', (req, res) => {
    res.status(200).send("Home")
})
// app.use  focuses on order  of call 
// 
// app.use(logger) 
// order matters for the cbs
// app.use([logger, authorize])
app.use("/api", [logger, authorize])
// app.use(path,middleware) every sub path
//  that is contained within will have the logger  middleware
// url is considered from the use path specified 
// example  here it is /products in the route /api/products
app.get('/about', (req, res) => {
    res.status(200).send("About")
})
app.get('/api/products', (req, res) => {
    res.status(200).send("Products")
})
app.get('/api/items', (req, res) => {
    res.status(200).send("About")
})
app.listen(5000, () => {
    console.log("server is listening to port 5000 ... ")
})