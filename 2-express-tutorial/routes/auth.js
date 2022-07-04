const express = require("express")
const router = express.Router()

router.post('/', (req, res) => {
    const { name } = req.body;
    if (name) {
        console.log(name)
        return res
            .status(200)
            .send(`welcome ${name}`)
    }
    return res.status(401).send(`please insert credentials `)

})

module.exports = router