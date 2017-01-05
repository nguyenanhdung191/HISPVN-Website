const pgp = require("pg-promise")({});
const db = require("../Common/db.json");

class GeneralDAL {
    constructor() {
        this.database = pgp(db.connectionString);
    }

    runQuery(query) {
        return this.database.many(query).then((rows) => {
            pgp.end();
            return rows;
        });
    }
}

module.exports = GeneralDAL;
