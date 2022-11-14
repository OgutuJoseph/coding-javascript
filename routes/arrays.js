const router = require('express').Router();
const { concat, constructor } = require('../controllers/arrays');

// concat()
router.get('/concat', concat);
router.get('/constructor', constructor);

module.exports = router;