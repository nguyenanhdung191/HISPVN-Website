const express = require('express');
const app = express();
const ProjectController = require("./src/Controller/ProjectController");
const NewController = require("./src/Controller/NewController");
const pc = new ProjectController();
const nc = new NewController();
app.use(express.static(__dirname + '/web'));


app.all("/api/projects", function (req, res) {
    pc.service(req, res);
});

app.all("/api/projects/:id", function (req, res) {
    pc.service(req, res);
});

app.all("/api/news", function (req, res) {
    nc.service(req, res);
});

app.all("/api/news/:id", function (req, res) {
    nc.service(req, res);
});


app.all("/", function (req, res) {
    res.sendFile(__dirname + "/web/demo.html");
});


const server = app.listen(8081, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("Server started at http://%s:%s", host, port)
});
