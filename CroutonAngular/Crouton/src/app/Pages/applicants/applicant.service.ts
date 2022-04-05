import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { Applicant } from 'src/Models/ui-models/applicant.model';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {

  readonly controller:string = "/Applicants";

  constructor(private httpClient:HttpClient,private appService:AppService) { }

  //Used to Get Employess from the Database
  FetchAllEmployees():Observable<Applicant[]>{
    return this.httpClient.get<Applicant[]>(this.appService.baseApiUrl + this.controller+"/ReturnAll");
  }
  //Used to Update Employess from the Database
  UpdateEmployee(applicant:Applicant):Observable<Applicant>{
    return this.httpClient.post<Applicant>(this.appService.baseApiUrl + this.controller+"/UpdateOne",applicant);
  }
  //Used to Delete Employess from the Database
  DeleteEmployee(id:string):Observable<Applicant>{
    return this.httpClient.delete<Applicant>(this.appService.baseApiUrl + this.controller+"/DeleteOne/"+id);
  }
}
