import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { Applicant } from 'src/Models/ui-models/applicant.model';

@Injectable({
  providedIn: 'root'
})
export class ApplyService {

  readonly controller:string = "/Applicants";

  constructor(private appService:AppService,private httpClient:HttpClient) { }

  PutApplicant(app:Applicant):Observable<Applicant>{
    return this.httpClient.put<Applicant>(this.appService.baseApiUrl+this.controller+"/Apply",app);
  }


}
