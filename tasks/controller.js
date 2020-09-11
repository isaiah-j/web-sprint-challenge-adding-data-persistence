const db = require('../data/db')

exports.getAllTasks = (req, res, next) => {
    db('tasks as t')
        .join('projects as p', 'p.id', 't.project_id')
        .select('p.name as project_name', ' p.description as project_description', 't.notes', 't.description').then(tasks => {
            res.status(200).json({
                status: 200,
                payload: {
                    tasks
                }
            })
        })
}

exports.createTask = (req, res, next) => {
    const task = {
        notes: req.body.notes,
        description: req.body.description,
        project_id: req.body.project_id
    }
    db('tasks')
        .insert(task)
        .returning('*')
        .then(task => {
            res.status(200).json({
                status: 200,
                message: 'Task created',
                payload: {
                    task: task[0]
                }
            })
        }).catch(err => {
            res.send(err)
        })
}