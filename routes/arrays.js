const router = require('express').Router();
const { 
    concat, 
    constructor,
    copyWithin
} = require('../controllers/arrays');

// concat()
router.get('/concat', concat);
router.get('/constructor', constructor);
router.get('/copyWithin', copyWithin);

module.exports = router;