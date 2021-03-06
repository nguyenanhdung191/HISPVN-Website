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
                let id = req.params.id;
                this.projectDAL.deleteProject(id).then(count => res.send(`Success, ${count} project(s) deleted`));
                break;
            }
        }
    }

}

module.exports = ProjectController;
