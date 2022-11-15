const router = require('express').Router();
const { 
    concat, 
    constructor,
    copyWithin,
    entries,
    every,
    fill,
    filter,
    find,
    findIndex,
    forEach,
    from,
    indexOf
} = require('../controllers/arrays');

// concat()
router.get('/concat', concat);
router.get('/constructor', constructor);
router.get('/copyWithin', copyWithin);
router.get('/entries', entries);
router.get('/every', every)
router.get('/fill', fill);
router.get('/filter', filter);
router.get('/find', find);
router.get('/findIndex', findIndex);
router.get('/forEach', forEach);
router.get('/from', from);
router.get('/indexOf', indexOf);

module.exports = router;