const express = require('express');
const { submitProjectRequest, getProjects } = require('../controllers/projectController');
const router = express.Router();

router.post('/request', submitProjectRequest);
router.get('/all', getProjects);

module.exports = router;
