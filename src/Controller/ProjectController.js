const Model = require("../Model/DAL");

class ProjectController {
    constructor() {
        this.projectDAL = new Model.ProjectDAL();
    }

    service(req, res) {
        switch (req.method) {
            case "GET": {
                if (Object.keys(req.params).length === 0 && req.params.constructor === Object) {
                    this.projectDAL.getAllProject()
                        .then(json => res.json(json));
                }
                else {
                    this.projectDAL.getProjectById(req.params.id)
                        .then(json => res.json(json));
                }
                break;
            }

            case "DELETE": {
                let id = req.query.id;
                this.deleteArticle(id).then(count => res.send(`Sucess, ${count} article deleted`));
                break;
            }
        }
    }

}

module.exports = ProjectController;
