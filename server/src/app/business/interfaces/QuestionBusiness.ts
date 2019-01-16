import BaseBusiness = require('./base');
import IQuetionModel = require('../../model/QuestionModel');

interface QuestionBusiness extends BaseBusiness<IQuetionModel>{

}
export = QuestionBusiness;