const express = require('express');
const router = express.Router();

const users = [{ name: 'Sally'}, { name: 'Kyle' }]
router.get('/', (req, res) => {
    res.send('User List');
})

router.get('/new', (req, res) => {
    res.send('User New Form');
})

router
    .route('/:id')
    .get((req, res) => {
        res.send(`User Get with ID ${req.user.name}`)
    })
    .put((req, res) => {
        res.send(`User Put with ID ${req.user.name}`)
    })
    .delete((req, res) => {
        res.send(`User Delete with ID ${req.user.name}`)
    })
 
router.param('id', (req, res, next, id) => {
    req.user = users[id]
    next()
})

module.exports = router;