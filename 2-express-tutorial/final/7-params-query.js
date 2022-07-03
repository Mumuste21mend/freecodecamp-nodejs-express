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
    const { search, limit } = req.query
    let sortedProducts = [...products]
    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1) {
        // res.status(200).send('no products matching ')
        //   pretty commun approach to show the state of not founding matches
        return res.status(200).json({ sucess: true, data: [] })
    }
    res.status(200).json(sortedProducts)
})



app.listen(5000, () => {
    console.log("Server is listening to port 5000")
})