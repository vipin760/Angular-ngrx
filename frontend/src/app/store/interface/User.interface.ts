export interface IUser{
    name:string;
    email:string;
    phone:string;
    password:string;
}
export interface IUserData{
    _id?:object;
    name:string;
    email:string;
    phone:string,
    password:string;
    type:string;
    createdAt:Date;
    updatedAt:Date;
    __v:number;
    id:string
}
export interface IUser_res{
    message:string;
    data:IUserData[];
}
export interface UsersRes{
    list:IUserData[];
    errormessage:string;
    userobj:IUserData;
}