/*   ./routes/api/index.js   */

const router = require('express').Router();
// const Greene = require('./greene');
// const = require('./review');
const users = require('./users');

// router.use('/thought', thought);
// router.use('/greene', thought);

// router.use('/users', users);
router.use('/users', users);

module.exports = router;
