const GeneralDAL = require("./GeneralDAL");

class NewDAL extends GeneralDAL {
    constructor() {
        super();
    }

    getAllNew() {
        return this.runManyResultQuery("SELECT * FROM new")
            .then(rows => rows)
            .catch(() => null);
    }

    getNewById(id) {
        return this.runOneResultQuery(`SELECT * FROM new WHERE id=${id}`)
            .then(row => row)
            .catch(() => {
                return {ErrorMessage: `No project available with id : ${id}`};
            });
    }

    deleteNew(id) {
        return this.runCRUD(`DELETE FROM new WHERE id='${id}'`)
            .then(count => count);
    }
}

module.exports = NewDAL;
