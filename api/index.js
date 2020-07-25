let express = require("express");
let app = express();

app.use(express.json());

app.post("/", function(req, res) {
    let playerId = req.body.playerid
    let num = req.body.number
    res.send([playerId, num])
});

module.exports = {
    path: "/api/",
    handler: app
};