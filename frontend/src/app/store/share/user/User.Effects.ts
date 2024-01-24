import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "src/app/service/user.service";
import { loaduser, loaduserfail, loadusersuccess } from "./User.Action";
import { catchError, exhaustMap, map, of } from "rxjs";
import { Injectable } from "@angular/core";

 
@Injectable()
 export class UserEffects{
    constructor(
        private actin$:Actions,
        private userService:UserService
    ){}
//////////////////////////////////////////////////////////////////////////////////////////
    _loaduser = createEffect(()=>
    this.actin$.pipe(
        ofType(loaduser), 
        exhaustMap((actions)=>{
            return this.userService.GET().pipe(
                map((data)=>{ 
                    return loadusersuccess({list:data.data})
                }),
                catchError((_error)=> of(loaduserfail({errormessage:"data fetch fail"})) ) 
            )
        }) 
    )
    )

//////////////////////////////////////////////////////////////////////////////////////////
 }