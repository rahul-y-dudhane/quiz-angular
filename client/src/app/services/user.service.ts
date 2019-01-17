import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppData } from '../constants/AppData';
import { User } from '../model/user'
import { Observable } from 'rxjs';
@Injectable()
export class UserService{

    constructor(private http: HttpClient){}

    getAllUsers():Observable<any>{
        return this.http.get(`${AppData.SERVER_URL}/allUsers`);
    }

}