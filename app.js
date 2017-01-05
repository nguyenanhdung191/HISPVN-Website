const express = require('express');
const app = express();
const Model = require("./src/Model/DAL");
const ad = new Model.ActivityDAL();

app.get("*", function (req, res) {
    ad.getAllActivity().then(rows => res.json({activities: rows}));
});


const server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port)
});
