const express = require('express');
const router = express.Router();
const { register, login, refresh, me } = require('../controllers/auth.controller');
const validate = require('../middleware/validation.middleware');
const { registerSchema, loginSchema } = require('../validators/auth.validator');
const authenticate = require('../middleware/auth.middleware');

router.post('/register', validate(registerSchema), register);
router.post('/login', validate(loginSchema), login);
router.post('/refresh', refresh);
router.get('/me', authenticate, me);

module.exports = router;