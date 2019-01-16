import mongoose = require('mongoose');
    
 interface QuestionModel extends mongoose.Document {

    id?:string;
    section:string;
    question:string;
    answer:string;
    options:string[];
}
export = QuestionModel;
