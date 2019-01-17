import DataAccess = require('../DataAccess');
import  IQuestionModel = require('../../model/interfaces/QuestionModel');

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class QuestionSchema{

    static get schema(){
        var schema = mongoose.Schema({
            id: {
                type: String,
                required: false
            },
            section: {
                type: String,
                required: true
            },
            question: {
                type: String,
                required: true
            },
            answer: {
                type: String,
                required: true
            },
            options:[{
                type: String,
                required: true
            }]
        });
        return schema;
    }
}

var schema = mongooseConnection.model<IQuestionModel>("Questions",QuestionSchema.schema);
export = schema;