import express = require('express');
import QuestionBusiness = require('../app/business/QuestionBusiness');
import IBaseController = require('./interfaces/base');

// const baseURL = "localhost:5000"

class QuestionController implements IBaseController<QuestionBusiness>{

    create(request: express.Request, response: express.Response): void { }

    update(request: express.Request, response: express.Response): void { }

    retrieve(request: express.Request, response: express.Response): void {
        try {
            var questionBusiness = new QuestionBusiness();
            questionBusiness.retrieve((error, result) => {
                error ? response.send({ "error": error }) : response.send(result);
            });
        }

        catch (e) {
            response.send({ "error": e });
        }
    }

    /**
     * @api localhost:5000/questions/section
     * @description Api for getting all questions under given section
     * @param request 
     * @param response 
     */
    retriveBySection(request: express.Request, response: express.Response): void {
        try{
             var section: string = request.params.section;
            var questionBusiness = new QuestionBusiness();
            questionBusiness.retrieveBySection(section,(error, result) => {
                
                error ? response.send({"error": error}) : response.send(result);
            })
        }
        catch(e){
            response.send({"Exception " : e})
        }
    }

    delete(request: express.Request, response: express.Response): void { }
    findById(request: express.Request, response: express.Response): void { }
}
export = QuestionController;
