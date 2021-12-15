const express = require('express');
const router = express.Router();
const { Author } = require('../models');
const { Op } = require('sequelize');

router.get('/new', (req, res) => {
    res.render('authors/new', { author: {} });
})

router.route('/')
    .get(async (req, res) => {
        const searchOptions = { where: {}};
        if (req.query.name != null && req.query.name !== '') {
            searchOptions.where = {...searchOptions.where, name: { [Op.substring]: req.query.name}}
        }
        try {
            const authors = await Author.findAll(searchOptions);
            console.log(JSON.stringify(authors))
            res.render('authors/index', { authors: authors, searchQuery: req.query });
        } catch (err) {
            res.redirect('/')
        }
    })
    .post(async (req, res) => {
        try {
            const { name } = req.body;
            const author = await Author.create({ name });
            // res.redirect(`authors/${author.id}`)
            res.redirect(`authors`)
        } catch (err) {
            console.log(`Error on Author Post: ${err}`);
            return res.render('authors/new', {
                errorMessage: 'Error creating new Author'
            })
        }
    })

module.exports = router;

/*
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

*/