const express = require('express');
const app = express();
const ArticleController = require("./src/Controller/ArticleController");
const ac = new ArticleController();
app.use(express.static(__dirname + '/web'));


app.all("/api/articles", function (req, res) {
    ac.req = req;
    ac.res = res;
    ac.service();
});


const server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Server started at http://%s:%s", host, port)
});
