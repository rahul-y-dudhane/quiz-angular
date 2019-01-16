import express = require('express');
import QuestionBusiness = require('../app/business/QuestionBusiness');
import IQuestionModel = require('../app/model/interfaces/QuestionModel');
import IBaseController = require('./interfaces/base');

class QuestionController implements IBaseController<QuestionBusiness>{

    create(request: express.Request, response: express.Response): void { }

    update(request: express.Request, response: express.Response): void { }

    retrieve(request: express.Request, response: express.Response): void {
        try {
            var questionBusiness = new QuestionBusiness();
            questionBusiness.retrieve((error, result) => {
                error ? response.send({ "error": error }) : response.send({ result });
            });
        }

        catch (e) {
            response.send({ "error": e });
        }
    }

    delete(request: express.Request, response: express.Response): void { }
    findById(request: express.Request, response: express.Response): void { }
}
export = QuestionController;
