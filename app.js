const express = require('express');
const app = express();
const Model = require("./src/Model/DAL");
const ArticleController = require("./src/Controller/ArticleController");
const ac = new ArticleController();

app.get("/api/articles", function (req, res) {
    ac.req = req;
    ac.res = res;
    ac.service();
});


app.use(express.static(__dirname + '/web'));

const server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Server started at http://%s:%s", host, port)
});
