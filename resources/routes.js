const express = require('express')
const resourceController = require('./controller')

const router = express.Router()

router.route('/')
    .get(resourceController.getAllResources)
    .post(resourceController.createResource)

module.exports = router