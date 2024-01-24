import { createReducer, on } from "@ngrx/store";
import { loadusersuccess } from "./User.Action";
import { UsersRes } from "../../interface/User.interface";

const InitialUserState: UsersRes[] = []
const _UserReducer = createReducer(InitialUserState,
    on(loadusersuccess,(state,action)=>{
        return {
            ...state,
            list:[...action.list],
            errormessage:''
        }
    })
    )


export function UserReducer(state:any, action:any){
    return _UserReducer(state,action)
}