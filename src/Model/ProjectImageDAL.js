const GeneralDAL = require("./GeneralDAL");

class ProjectImageDAL extends GeneralDAL {
    constructor() {
        super();
    }

    getImageByProjectId(id) {
        return this.runManyResultQuery(`SELECT * FROM projectimage WHERE projectid=${id}`)
            .then(rows => rows)
            .catch(() => null);
    }
}

module.exports = ProjectImageDAL;
