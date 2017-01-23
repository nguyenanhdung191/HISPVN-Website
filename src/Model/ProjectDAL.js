const GeneralDAL = require("./GeneralDAL");

class ProjectDAL extends GeneralDAL {
    constructor() {
        super();
    }

    getAllProject() {
        return this.runManyResultQuery("SELECT * FROM project ORDER BY date DESC")
            .then(rows => {
                return Promise.all(rows.map(project => {
                    return this.runManyResultQuery(`SELECT * FROM projectimage WHERE projectid=${project.id}`)
                        .then(images => {
                            project.images = images;
                            return project;
                        })
                        .catch(() => project);
                })).then(result => result);
            })
            .catch(() => {
                return {ErrorMessage: "No project available"};
            });
    }

    getProjectById(id) {
        return this.runOneResultQuery(`SELECT * FROM project WHERE id=${id}`)
            .then(row => {
                return this.runManyResultQuery(`SELECT * FROM projectimage WHERE projectid =${id}`)
                    .then(images => {
                        row.images = images;
                        return row;
                    })
                    .catch(() => row);
            })
            .catch(() => {
                return {ErrorMessage: `No project available with id : ${id}`};
            });
    }

    deleteProject(id) {
        return this.runCRUD(`DELETE FROM project WHERE id='${id}'`)
            .then(count => count);
    }
}

module.exports = ProjectDAL;
