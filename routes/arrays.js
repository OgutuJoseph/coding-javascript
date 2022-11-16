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
    indexOf,
    isArray,
    join,
    keys,
    lastIndexOf,
    length,
    map,
    pop,
    prototype
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
router.get('/isArray', isArray);
router.get('/join', join);
router.get('/keys', keys);
router.get('/lastIndexOf', lastIndexOf);
router.get('/length', length);
router.get('/map', map);
router.get('/pop', pop);
router.get('/prototype', prototype);

module.exports = router;