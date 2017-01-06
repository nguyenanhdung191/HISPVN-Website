const pgp = require("pg-promise")({});
const db = require("../Common/db.json");

class GeneralDAL {
    constructor() {
        this.database = pgp(db.connectionString);
    }

    runManyResultQuery(query) {
        return this.database.many(query).then((rows) => {
            pgp.end();
            return rows;
        });
    }

    runOneResultQuery(query) {
        return this.database.one(query).then((row) => {
            pgp.end();
            return row;
        });
    }

    runCRUD(query) {
        return this.database.result(query)
            .then(function (result) {
                return result.rowCount;
            })
    }
}

module.exports = GeneralDAL;
