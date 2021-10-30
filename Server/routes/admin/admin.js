const express = require('express');
const router = express.Router();
const {signup, signin} = require('../../controller/admin/admin');

router.post('/admin/signin', signin);


router.post('/admin/signup', signup);

module.exports = router;
