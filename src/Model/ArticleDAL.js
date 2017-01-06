const GeneralDAL = require("./GeneralDAL");

class ArticleDAL extends GeneralDAL {
    constructor() {
        super();
    }

    getAllArticle() {
        return this.runManyResultQuery("SELECT * FROM Article").then(rows => rows);
    }

    getArticleById(id) {
        return this.runOneResultQuery(`SELECT * FROM Article WHERE id=${id}`).then(rows => rows);
    }

    getArticleByType(type) {
        return this.runManyResultQuery(`SELECT * FROM Article WHERE type='${type}'`).then(rows => rows);
    }
}

module.exports = ArticleDAL;
