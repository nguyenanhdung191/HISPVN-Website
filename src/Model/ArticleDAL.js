const GeneralDAL = require("./GeneralDAL");

class ArticleDAL extends GeneralDAL {
    constructor() {
        super();
    }

    getAllArticle() {
        return this.runManyResultQuery("SELECT * FROM Article")
            .then(rows => rows)
            .catch(() => null);
    }

    getArticleById(id) {
        return this.runOneResultQuery(`SELECT * FROM article WHERE id=${id}`)
            .then(row => row)
            .catch(() => null);
    }

    getArticleByType(type) {
        return this.runManyResultQuery(`SELECT * FROM article WHERE type='${type}'`)
            .then(rows => rows)
            .catch(() => null);
    }

    deleteArticle(id) {
        return this.runCRUD(`DELETE FROM article WHERE id='${id}'`)
            .then(count => count);
    }
}

module.exports = ArticleDAL;
