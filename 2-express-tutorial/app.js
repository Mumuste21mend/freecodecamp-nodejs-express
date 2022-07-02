const express = require('express');
const app = express();
const { products, people } = require('./data')

app.get('/', (req, res) => {
    // res.status(200).json([{ name: 'mumuste' }, { name: 'mend' }])
    res.send('<h1>Home Page </h1> <a href="/api/products">api right here </a>')
})
app.get('/api/products', (req, res) => {
    const newProducts = products.map(product => {
        const { id, name, price } = product
        return { id, name, price }
    })
    res.status(200).json(newProducts)
})
app.get('/api/products/:productID', (req, res) => {
    const { productID } = req.params
    const singleProduct = products.find(product => product.id === Number(productID))
    if (!singleProduct)
        return res.status(404).send("product does not exist ")
    return res.status(200).json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    const { productID, reviewID } = req.params
    return res.status(200).json({ productID, reviewID })
})


app.get('/api/v1/query', (req, res) => {
    console.log(req.query)
    return res.send(req.query)//.status(200).json({ productID, reviewID })
})
app.listen(5000, () => {
    console.log("Server is listening to port 5000")
})