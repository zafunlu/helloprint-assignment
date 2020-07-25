let express = require("express")
let session = require('express-session')
let app = express()

app.use(express.json())

app.use(session({
    secret: 'peanut hoarder',
}))

// app.use(function (req, res, next) {
//     req.session.
// })

app.post("/", function(req, res) {
    let playerId = req.body.playerid
    let inputNumber = parseInt(req.body.number, 10)
    // res.send(inputNumber)
    let guessedNumber = 50
    // res.send([playerId, num])
    if (inputNumber < guessedNumber) {
        res.json({"guess": "higher"})
    }
    else if (inputNumber > guessedNumber) {
        res.json({"guess": "lower"})
    }
    else if (inputNumber === guessedNumber) {
        res.json({"guess": "Bingo!!!"})
    }
    else {
        res.send('Invalid input')
    }
});

module.exports = {
    path: "/api/",
    handler: app
};