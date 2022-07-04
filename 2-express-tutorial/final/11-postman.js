const express = require("express")
const app = express()
let { people } = require("../data");
app.use(express.static("../methods-public"))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.get('/api/people', (req, res) => {
    res
        .status(200)
        .json({ success: true, data: people })
})
app.post('/api/people', (req, res) => {
    const { name } = req.body;
    if (!name) {
        res
            .status(400)
            .json({ success: false, msg: 'please provide name value' })
    }
    res
        .status(201)
        .json({ success: true, person: name })
})
app.post('/api/postman/people', (req, res) => {
    const { name } = req.body;
    if (!name) {
        res
            .status(400)
            .json({ success: false, msg: 'please provide name value' })
    }
    res
        .status(201)
        .json({ success: true, data: [...people, { id: 6, name }] })
})

app.put('/api/postman/people/:id', (req, res) => {
    const { name } = req.body;
    const { id } = req.params;

    let person = people.find(person => person.id === Number(id))
    if (!person) {
        return res
            .status(400)
            .json({ success: false, msg: `no person with the id : ${id}` })
    }
    let newPeople = people.map(person => {
        if (person.id === Number(id)) {
            person.name = name;
        }
        return person;
    })

    res
        .status(201)
        .json({ success: true, data: newPeople })
})
app.delete('/api/postman/people/:id', (req, res) => {
    const { id } = req.params;
    let person = people.find(person => person.id === Number(id))
    if (!person) {
        return res
            .status(400)
            .json({ success: false, msg: `no person with the id : ${id}` })
    }
    let newPeople = people.filter(person => person.id !== Number(id))

    res
        .status(201)
        .json({ success: true, data: newPeople })
})
app.post('/login', (req, res) => {
    const name = req.body;
    if (name) {
        return res
            .status(200)
            .send(`welcome ${name}`)
    }
    return res.status(401).send(`please insert credentials `)

})
app.listen(5000, () => {
    console.log("server is listening to port 5000 ... ")
})