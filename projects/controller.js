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

exports.createTask = (req,res,next) => {
    const task = {
        name: req.body.name,
        descriptin
    }

}