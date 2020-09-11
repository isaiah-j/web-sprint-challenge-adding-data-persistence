const db = require('../data/db')


exports.getAllResources = (req, res, next) => {
    db('resources').then(resources => {
        res.status(200).json({
            status: 200,
            results: resources.length,
            payload: {
                resources
            }
        })
    }).catch(err => {
        res.send(err)
    })
}

exports.createResource = (req, res, next) => {
    db('resources')
        .insert(req.body)
        .returning('*')
        .then(result => {
            res.status(201).json({
                payload: {
                    project: result[0]
                }
            })
        }).catch(err => {
            res.send(err)
        })
}

