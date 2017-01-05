const GeneralDAL = require("./GeneralDAL");

class ActivityDAL extends GeneralDAL {
    constructor() {
        super();
    }

    getAllActivity() {
        return this.runQuery("SELECT * FROM Activity").then(rows => rows);
    }
}

module.exports = ActivityDAL;
