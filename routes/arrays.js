const router = require('express').Router();
const { 
    concat, 
    constructor,
    copyWithin,
    entries
} = require('../controllers/arrays');

// concat()
router.get('/concat', concat);
router.get('/constructor', constructor);
router.get('/copyWithin', copyWithin);
router.get('/entries', entries);

module.exports = router;