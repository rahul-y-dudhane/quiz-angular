import IQuestionModel =  require('./interfaces/QuestionModel')

 class QuestionModel {

    private _questionModel: IQuestionModel;

    constructor(private questionModel: IQuestionModel) {
        this._questionModel = questionModel;
    }

    get question(): string {
        return this._questionModel.question;
    }

    get answer(): string {
        return this._questionModel.answer;
    }

    get section(): string {
        return this._questionModel.section;
    }
    
    get options(): string[] {
        return this._questionModel.options;
    }

}
Object.seal(QuestionModel);
export = QuestionModel;