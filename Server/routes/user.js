const express = require('express');
const router = express.Router();
const User = require('../models/user');
const {signup, signin} = require('../controller/user');

router.post('/signin', signin);


router.post('/signup', signup);

module.exports = router;
