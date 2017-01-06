const Model = require("../Model/DAL");

class ArticleController {
    constructor() {
        this.articleDAL = new Model.ArticleDAL();
        this.req = null;
        this.res = null;
    }

    service() {
        let queries = this.req.query;
        if (Object.keys(queries).length === 0 && queries.constructor === Object) {
            this.getAllArticle().then(json => this.res.json(json));
        } else if (Object.keys(queries).length === 1 && queries.hasOwnProperty("id")) {
            this.getArticleById(queries.id).then(json => this.res.json(json));
        } else if (Object.keys(queries).length === 1 && queries.hasOwnProperty("type")) {
            this.getArticleByType(queries.type).then(json => this.res.json(json));
        }
    }


    getAllArticle() {
        return this.articleDAL.getAllArticle().then(json => json);
    }

    getArticleById(id) {
        return this.articleDAL.getArticleById(id).then(json => json);
    }

    getArticleByType(type) {
        return this.articleDAL.getArticleByType(type).then(json => json);
    }
}

module.exports = ArticleController;
