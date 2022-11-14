const router = require('express').Router();
const { concat } = require('../controllers/arrays');

// concat()
router.get('/concat', concat);

module.exports = router;