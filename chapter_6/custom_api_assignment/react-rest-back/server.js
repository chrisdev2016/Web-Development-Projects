const express = require('express');
const bodyParser = require('body-parser')

const app = express();


var listItems = [
    { text: 'learn angular', done: false, id: 1 },
    { text: 'write the content for the next module', done: false, id: 2 },
    { text: 'buy cheese', done: true, id: 3 },
    { text: 'buy milk', done: true, id: 4 }
]


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Content-Type,Accept");
    next();
})



app.get('/todos', function (req, res) {
    res.json(listItems)
})


app.post('/todos', (req, res) => {

    listItems = req.body.list
    res.json(listItems)

})



app.listen(8080, () => {
    console.log("server listening on port 8080")
})

