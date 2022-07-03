const express = require("express")

const app = express()
// 
// req => middleware => res

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time)
    // res.send("testing")
    next()
}


app.get('/', (req, res) => {
    res.status(200).send("Home")
})

app.get('/about', logger, (req, res) => {
    res.status(200).send("About")
})
app.get('/api/products', logger, (req, res) => {
    res.status(200).send("Products")
})
app.get('/api/items', logger, (req, res) => {
    res.status(200).send("About")
})
app.listen(5000, () => {
    console.log("server is listening to port 5000 ... ")
})