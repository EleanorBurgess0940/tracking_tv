const db = require("../models");

// Defining methods for the tvController
module.exports = {
    findAll: function (req, res) {
        db.Show
            .find(req.query)
            .sort({ title: 1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Show
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};