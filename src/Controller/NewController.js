const Model = require("../Model/DAL");

class NewController {
    constructor() {
        this.newDAL = new Model.NewDAL();
    }

    service(req, res) {
        switch (req.method) {
            case "GET": {
                if (Object.keys(req.params).length === 0 && req.params.constructor === Object) {
                    this.newDAL.getAllNew()
                        .then(json => res.json(json));
                }
                else {
                    this.newDAL.getNewById(req.params.id)
                        .then(json => res.json(json));
                }
                break;
            }

            case "DELETE": {
                let id = req.params.id;
                this.newDAL.deleteNew(id).then(count => res.send(`Success, ${count} project(s) deleted`));
                break;
            }
        }
    }

}

module.exports = NewController;
