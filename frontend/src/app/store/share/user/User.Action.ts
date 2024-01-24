import { createAction, props } from '@ngrx/store'
import { IUserData } from '../../interface/User.interface';

 export const LOAD_USER = '[ user page ] load user'
 export const LOAD_USER_SUCCESS = '[ user page ] load user success'
 export const LOAD_USER_FAIL = '[ user page ] load user fail'


 export const loaduser = createAction(LOAD_USER);
 export const loadusersuccess = createAction(LOAD_USER_SUCCESS,props<{list:IUserData[]}>());
 export const loaduserfail = createAction(LOAD_USER_FAIL,props<{errormessage:string}>())
 