import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IUserData, UsersRes } from "../../interface/User.interface";

 

 export const UserSelectorState = createFeatureSelector<UsersRes>('user')

 export const getuserlist = createSelector(UserSelectorState,(state)=>{
    return state.list
 })