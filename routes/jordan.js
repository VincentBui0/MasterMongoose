const express = require('express');
const router = express.Router();
const jordanController = require('../controllers/jordanController.js')

router.route('/')
    .get(jordanController.fetchAllJordans)
    .post(jordanController.createJordan)

router.route('/:id')
    .get(jordanController.fetchJordan)
    .put(jordanController.updateJordan)
    .delete(jordanController.deleteJordan);

module.exports = router;