const router = require('express').Router();
const controller = require('../controllers/user.controller');
const validateInput = require('../../middleware/validator');

router.post('/signup', validateInput, controller.signup);
router.post('/login', controller.login);
router.get('/logout', controller.logout);

module.exports = router;
