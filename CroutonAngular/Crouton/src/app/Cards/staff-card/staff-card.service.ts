import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { Employee } from 'src/Models/ui-models/Employee.model';
@Injectable({
  providedIn: 'root'
})
export class StaffCardService {

  constructor(private httpClient:HttpClient,private appService:AppService) { }

  FetchAllEmployees():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.appService.baseApiUrl + "/Client/ReturnAll");
  }
}
