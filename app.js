const express = require('express');
const app = express();
const ArticleController = require("./src/Controller/ArticleController");
const ac = new ArticleController();
app.use(express.static(__dirname + '/web'));


app.all("/api/articles", function (req, res) {
    ac.service(req, res);
});

app.all("/", function (req, res) {
    res.send(__dirname + "/web/index.html");
});


const server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Server started at http://%s:%s", host, port)
});
