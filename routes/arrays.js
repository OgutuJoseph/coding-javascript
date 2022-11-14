const router = require('express').Router();
const { 
    concat, 
    constructor,
    copyWithin,
    entries,
    every,
    fill,
    filter,
    find
} = require('../controllers/arrays');

// concat()
router.get('/concat', concat);
router.get('/constructor', constructor);
router.get('/copyWithin', copyWithin);
router.get('/entries', entries);
router.get('/every', every)
router.get('/fill', fill);
router.get('/filter', filter);
router.get('/find', find)

module.exports = router;