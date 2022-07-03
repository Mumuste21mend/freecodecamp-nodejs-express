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


app.listen(5000, () => {
    console.log("Server is listening to port 5000")
})