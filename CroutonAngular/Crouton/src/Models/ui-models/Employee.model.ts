import { client } from "./client.model";
import { Job } from "./Job.model";

export interface Employee{
    /**
     *
     */
    
    
    firstName:string,
    lastName:string,
    email:string,
    id:string,
    phone:Number,
    address:string,
    city:string
    state:string,
    save:boolean,
    hiredDate:string,
    position:Job,
    wage:number,
    hoursWorked:number,
    client:client
    /**
     *
     */
    
}