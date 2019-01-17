import QuestionRepository = require('../repository/QuestionRepository');
import IQuestionModel = require('../model/QuestionModel');
import IQuestionBusiness = require('../business/interfaces/HeroBusiness');

class QuestionBusiness implements IQuestionBusiness{
    private _QuestionRepository : QuestionRepository;

    constructor(){
        this._QuestionRepository = new QuestionRepository();
    }


    create(){}

    retrieve(callback:(error: any, result: any) => void){
            this._QuestionRepository.retrieve(callback);
    }
    retrieveBySection(section: string, callback: (error: any, result: any) => void){
        this._QuestionRepository.retriveBySection(section, callback);
    }

    delete(){}
    update(){}
    findById(){}
}
Object.seal(QuestionBusiness);
export = QuestionBusiness;
