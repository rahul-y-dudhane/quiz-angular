import IQuestionModel = require('../model/QuestionModel');
import QuestionSchema = require('../dataAccess/schemas/QuestionSchema');
import RepositoryBase = require('./base');

class QuestionRepository extends RepositoryBase<IQuestionModel>{
    constructor(){
        super(QuestionSchema);
    }
}
Object.seal(QuestionRepository);
export = QuestionRepository;
