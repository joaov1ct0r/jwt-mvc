const db = require('../model/db.js');

let user = {
    info: function (req, res) {
        let { email, senha } = req.body;

        db.getUser(email, senha, function (result) {
            res.send(JSON.stringify(result));
        });
    },

    new: function (req, res) {}
};

module.exports = user;
