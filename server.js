const express = require('express');
const app = express();
const ProjectController = require("./src/Controller/ProjectController");
const pc = new ProjectController();
app.use(express.static(__dirname + '/web'));


app.all("/api/projects", function (req, res) {
    pc.service(req, res);
});

app.all("/api/projects/:id", function (req, res) {
    pc.service(req, res);
});


app.all("/", function (req, res) {
    res.sendFile(__dirname + "/web/demo.html");
});


const server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Server started at http://%s:%s", host, port)
});
