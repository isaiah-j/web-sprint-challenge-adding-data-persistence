const express = require('express')
const app = express()
const projectRouter = require('./projects/routes')
const resourceRouter = require('./resources/routes')
const taskRouter = require('./tasks/routes')

app.use(express.json())

app.use('/api/projects', projectRouter)

app.use('/api/resources', resourceRouter)

app.use('/api/tasks', taskRouter)

module.exports = app