const pgp = require("pg-promise")({});
const db = require("../Common/db.json");
const database = pgp(db.connectionString);
class GeneralDAL {
    constructor() {
    }

    runManyResultQuery(query) {
        return database.many(query).then((rows) => {
            pgp.end();
            return rows;
        });
    }

    runOneResultQuery(query) {
        return database.one(query).then((row) => {
            pgp.end();
            return row;
        });
    }

    runCRUD(query) {
        return database.result(query)
            .then(function (result) {
                return result.rowCount;
            })
    }
}

module.exports = GeneralDAL;
