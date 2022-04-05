import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { Employee } from 'src/Models/ui-models/Employee.model';

@Injectable({
  providedIn: 'root'
})
export class StaffingService {

  constructor(private httpClient:HttpClient,private appService:AppService) { }

  //Used to Get Employess from the Database
  FetchAllEmployees():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.appService.baseApiUrl + "/Client/ReturnAll");
  }
  //Used to Update Employess from the Database
  UpdateEmployee(emp:Employee):Observable<Employee>{
    return this.httpClient.post<Employee>(this.appService.baseApiUrl + "/Client/UpdateOne",emp);
  }
  //Used to Delete Employess from the Database
  DeleteEmployee(id:string):Observable<Employee>{
    return this.httpClient.delete<Employee>(this.appService.baseApiUrl + "/Client/DeleteOne/"+id);
  }
}
