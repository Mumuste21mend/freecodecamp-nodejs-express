const express = require('express')
const router = express.Router()
const {
    getPeople,
    createPeople,
    createPeoplePostman,
    setPeople,
    deletePeople
} = require('../controllers/people.js')
// first flavor 
// router.get('/', getPeople)
// router.post('/', createPeople)
// router.post('/postman', createPeoplePostman)
// router.put('/:id', setPeople)
// router.delete('/:id', deletePeople)
// second flavor 
router.route('/')
    .get(getPeople)
    .post(createPeople)
router.route('/postman')
    .post(createPeoplePostman)
router.route('/:id')
    .put(setPeople)
    .delete(deletePeople)

module.exports = router