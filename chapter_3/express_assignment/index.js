var express = require('express');
var app = express();

app.get('/joke', function(req, res){

    res.sendFile(__dirname + '/joke.html');
})

app.use(express.static('subdirectory'));

app.get('/journal', function(req, res){
    var cacheTime =(2*24*60*60);
    var options = {maxAge:cacheTime};

    res.sendFile(__dirname + '/subdirectory/index.html', options);
})
app.listen(8080);