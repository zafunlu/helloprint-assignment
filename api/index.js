let express = require("express");
let app = express();

app.post("/:number", function(req, res) {
    let number = req.params.number
    res.send(number)
});

module.exports = {
    path: "/api/",
    handler: app
};