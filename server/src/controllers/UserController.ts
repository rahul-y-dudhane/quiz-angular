import express = require('express');
import IBaseController = require('./interfaces/base');
import UserBusiness = require('../app/business/UserBusiness')

// const baseURL = "localhost:5000"

class UserController implements IBaseController<UserBusiness>{

    create(request: express.Request, response: express.Response): void { }

    update(request: express.Request, response: express.Response): void { }

    /**
     * @api localhost:5000/allUsers
     * @description Api for getting all users
     * @param request 
     * @param response 
     */
    retrieve(request: express.Request, response: express.Response): void {
        try {

            var userBusiness = new UserBusiness();
            userBusiness.retrieve((error, result) => {
                error ? response.send({ "error": error }) : response.send(result);
            });
        }

        catch (e) {
            response.send({ "exception": e });
        }
    }

    delete(request: express.Request, response: express.Response): void { }
    findById(request: express.Request, response: express.Response): void { }
}
export = UserController;
