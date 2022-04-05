export interface client{

    authToken : string,
    isAdmin : boolean,
    isManager:boolean,
    encodedPassword : string,
    prefrences : Array<string>


}