const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController.js')

router.route('/')
    .get(pokemonController.catchAll)
    .post(pokemonController.find)

router.route('/:id')
    .get(pokemonController.create)
    .put(pokemonController.update)
    .delete(pokemonController.deleteEntry);

module.exports = router;