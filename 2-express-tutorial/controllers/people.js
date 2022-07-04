let { people } = require("../data");

// getting people 
const getPeople = (req, res) => {
    res
        .status(200)
        .json({ success: true, data: people })
}
// creating people 
const createPeople = (req, res) => {
    const { name } = req.body;
    if (!name) {
        res
            .status(400)
            .json({ success: false, msg: 'please provide name value' })
    }
    res
        .status(201)
        .json({ success: true, person: name })
}
const createPeoplePostman = (req, res) => {
    const { name } = req.body;
    if (!name) {
        res
            .status(400)
            .json({ success: false, msg: 'please provide name value' })
    }
    res
        .status(201)
        .json({ success: true, data: [...people, { id: 6, name }] })
}
//  updating people 
const setPeople = (req, res) => {
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
}
// deleting people 
const deletePeople = (req, res) => {
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
}

module.exports = {
    getPeople,
    createPeople,
    createPeoplePostman,
    setPeople,
    deletePeople
}