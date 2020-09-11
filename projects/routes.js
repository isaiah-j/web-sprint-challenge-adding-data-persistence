const express = require('express')
const router = express.Router()
const projectController = require('./controller')

router.route('/')
    .get(projectController.getAllProjects)
    .post(projectController.createProject)

router.route('/:id/tasks')
    .get()
    .post(projectController.createTask)

module.exports = router