const Model = require("../Model/DAL");

class ArticleController {
    constructor() {
        this.articleDAL = new Model.ArticleDAL();
    }

    service(req, res) {
        switch (req.method) {
            case "GET": {
                let queries = req.query;
                if (Object.keys(queries).length === 0 && queries.constructor === Object) {
                    this.getAllArticle()
                        .then(json => {
                            res.json(json);
                        });
                } else if (Object.keys(queries).length === 1 && queries.hasOwnProperty("id")) {
                    this.getArticleById(queries.id)
                        .then(json => {
                            res.json(json);
                        });
                } else if (Object.keys(queries).length === 1 && queries.hasOwnProperty("type")) {
                    this.getArticleByType(queries.type)
                        .then(json => {
                            res.json(json);
                        });
                } else {
                    res.status(404).send('Invalid URL');
                }
                break;
            }

            case "DELETE": {
                let id = req.query.id;
                this.deleteArticle(id).then(count => res.send(`Sucess, ${count} article deleted`));
                break;
            }
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

    deleteArticle(id) {
        return this.articleDAL.deleteArticle(id).then(count => count);
    }
}

module.exports = ArticleController;
