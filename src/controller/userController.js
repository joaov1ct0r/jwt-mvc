const db = require('../model/db.js');

let user = {
    info: function (req, res) {
        let { email } = req.body;

        let { senha } = req.body;

        let request = db.getUser(email, senha, function (result) {
            res.send(JSON.stringify(result));
        });
    }
};

module.exports = user;
