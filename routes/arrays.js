const router = require('express').Router();
const { 
    concat, 
    constructor,
    copyWithin,
    entries,
    every
} = require('../controllers/arrays');

// concat()
router.get('/concat', concat);
router.get('/constructor', constructor);
router.get('/copyWithin', copyWithin);
router.get('/entries', entries);
router.get('/every', every)

module.exports = router;