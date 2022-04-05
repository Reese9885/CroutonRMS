import { Job } from "./Job.model";

export interface Applicant{


    firstName:string,
    lastName:string,
    email:string,
    id:string,
    phone:string,
    address:string,
    state:string,
    city:string,
    save:boolean,
    appliedDate:string,
    position:Job,
    notes:string;

}