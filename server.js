var express = require('express');
var app = express();

app.get('/', function (req,res) {
    res.send('Hello!');
})

app.get('/site.html', function (req,res) {
    res.sendFile(__dirname + '/views/site.html');
})

app.get('/scripts/coffee-script.js', function(req,res) {
    res.sendFile(__dirname + '/scripts/coffee-script.js');
})

app.get('/scripts/ect.min.js', function(req,res) {
    res.sendFile(__dirname + '/scripts/ect.min.js');
})

app.get('/views/projects.html.ect', function(req,res) {
    res.sendFile(__dirname + '/views/projects.html.ect');
})

app.get('/models/data.js', function(req,res) {
    res.sendFile(__dirname + '/models/data.js');
})

var server = app.listen(3000, function() {
    var host =  server.address().address
    var port = server.address().port

    console.log("Test server is up and listening at http://%s:%s", host, port)
})
