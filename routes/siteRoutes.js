const express = require('express');
const router = express.Router();

const { getSites, createSite, updateSite, deleteSite } = require('../controllers/siteController');

router.get('/', getSites);

router.post('/', createSite);

router.put('/:id', updateSite);

router.delete('/:id', deleteSite);

module.exports = router;