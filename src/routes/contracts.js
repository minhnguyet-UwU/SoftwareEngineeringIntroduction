const express = require('express');
const router = express.Router();
const contractsController = require('../app/controllers/ContractsController.js');

// newsController.index()
router.use('/:id', contractsController.showID);
router.use('/', contractsController.index);

module.exports = router;
