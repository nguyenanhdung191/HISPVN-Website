const express = require('express');
const app = express();
const ActivityDAL = require("./src/Model/ActivityDAL");
const ad = new ActivityDAL();

app.get('/api/activities', function (req, res) {
    ad.getAllActivity().then(rows => res.json({activities:rows}));
});


const server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port)
});
