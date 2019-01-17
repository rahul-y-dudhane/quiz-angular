import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppData } from '../constants/AppData';
import { Observable } from 'rxjs';
@Injectable()
export class QuestionService{

    constructor(private http: HttpClient){}

    getAllQuestions():Observable<any>{
        return this.http.get(`${AppData.SERVER_URL}/questions`);
    }

    getQuestionsBySection(section: string):Observable<any>{
        return this.http.get(`${AppData.SERVER_URL}/questions/${section}`);
    }

}