import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser_res } from '../store/interface/User.interface';
import { USER_BASE_URL } from '../store/common/constants.ts/url';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http:HttpClient
  ) { }
  ///////////////////////////////////////////////////
  GET(){
    return this.http.get<IUser_res>(`${USER_BASE_URL}/get`)
  }
  ///////////////////////////////////////////////////
}
