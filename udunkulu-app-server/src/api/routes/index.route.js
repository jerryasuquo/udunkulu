const router = require('express').Router();
const controller = require('../controllers/index.controller');

router.all('*', controller.indexRoute);

module.exports = router;
