import express = require('express');

import QuestionController = require('../../controllers/QuestionController');

var router = express.Router();

class QuestionRoutes {
    private _QuestionController: QuestionController;

    constructor(){
        this._QuestionController = new QuestionController();
    }

    get routes() {
        var controller = this._QuestionController;
        router.get("/questions", controller.retrieve);

        return router;
    }
}

Object.seal(QuestionRoutes);
export = QuestionRoutes;