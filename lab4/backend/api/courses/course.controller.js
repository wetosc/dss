const Model = require('./course.model')
const mongoose = require("mongoose")
exports.insert = (req, res) => {
    Model.create(req.body)
        .then((result) => {
            res.status(201).json({ id: result._id });
        });
};

exports.list = (req, res) => {
    console.log(mongoose.connection.readyState)
    if (req.query) {
        var limit = req.query.limit && req.query.limit <= 1000 ? parseInt(req.query.limit) : 1000;
        req.query.page = parseInt(req.query.page);
        var page = req.query.page && Number.isInteger(req.query.page) ? req.query.page : 0;
    }

    Model.listAll(limit, page)
        .then((result) => {
            res.status(200).json(result);
        })

};

exports.getById = (req, res) => {
    Model.findById(req.params.id)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((error) => {
            res.status(404).json({ error: error })
        });
};

exports.removeById = (req, res) => {
    Model.removeById(req.params.id).then((result) => {
        res.status(204).json({});
    }).catch((error) => {
        return res.status(404).json({ error: error })
    })
};