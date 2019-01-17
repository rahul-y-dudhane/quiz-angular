import IQuestionModel = require('../model/QuestionModel');
import QuestionSchema = require('../dataAccess/schemas/QuestionSchema');
import RepositoryBase = require('./base');

class QuestionRepository extends RepositoryBase<IQuestionModel>{
    constructor(){
        super(QuestionSchema);
    }

   retriveBySection(section: string, callback: (error: any, result: any) => void){
       QuestionSchema.find({section:section}, callback);
   }

}
Object.seal(QuestionRepository);
export = QuestionRepository;
