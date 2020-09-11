const db = require('../data/db')

exports.getAllProjects = (req, res, next) => {
    db('projects').then(projects => {
        res.status(200).json({
            status: 200,
            results: projects.length,
            payload: {
                projects
            }
        })
    })
}

exports.getProject = () => {

}

exports.createProject = (req, res, next) => {
    db('projects')
        .insert(req.body)
        .returning('*')
        .then(result => {
            res.status(201).json({
                status: 200,
                payload: {
                    project: result[0]
                }
            })
        }).catch(err => {
            console.log(err)
            res.send(err)
        })
}

exports.createTask = (req, res, next) => {
    const task = {
        description: req.body.description,
        notes: req.body.notes,
        project_id: req.params.id
    }
    db('tasks').insert(task).returning('*').then(task => {
        res.status(201).json({
            status: 201,
            payload: {
                task
            }
        }).catch(err => {
            res.send(err)
        })
    })
}

exports.getAllTasks = (req, res, next) => {
    db('tasks as t')
        .join('projects as p', 'p.id', 't.project_id')
        .select('p.name')
        .where({ project_id: req.params.id })
        .then(tasks => {
            res.status(200).json({
                status: 200,
                payload: {
                    tasks: tasks
                }
            })
        }).catch(err => {
            res.status(500).json({
                status: 500,
                message: "Unable to get projects"
            })
        })
}

