import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Employee } from 'src/Models/ui-models/Employee.model';
import {Router} from "@angular/router";
import { client } from 'src/Models/ui-models/client.model';
import { AppService } from 'src/app/app.service';

@Injectable({
  providedIn: 'root'
})
export class ClientLoginService {


  private clientData = <Employee>{};
  public clientObserver = new BehaviorSubject<Employee>(this.clientData);

  private loggedIn = false
  public loggedObserver = new BehaviorSubject<boolean>(this.loggedIn);


  constructor(private httpClient:HttpClient, private router:Router, private appService:AppService) {
    this.clientObserver.subscribe((value) => {this.clientData = value});
    this.loggedObserver.subscribe((value) => {this.loggedIn = value});
    let emp = <Employee>{};
    emp.client = <client>{};
    this.clientObserver.next(emp);
    this.loggedObserver.next(false);
  }
  
  CheckToken(){
    console.log("Checking token..."+this.clientData.client.authToken);
    if(this.clientData.client.authToken == null || this.clientData.client.authToken == "" ){
       this.ResetClientData();
       this.router.navigate([''])
       console.log("Bad");
    }
    

  }

   
  ChangeEmpoyeeData(emp : Employee){
    console.log("current: "+this.clientData.firstName);
    console.log("PAssin: "+emp.firstName);
    this.clientObserver.next(emp);
    console.log("after set: "+this.clientData.firstName+" "+this.loggedIn);
  }
  SetLoggedStatus(value:boolean){this.loggedObserver.next(value); console.log(this.loggedIn+" bbbb")};

  SetClientData(employee:Employee){this.clientData = employee;console.log("SETTING: "+employee.client.isAdmin)}

  GetClientData():Employee{return this.clientData};

  ResetClientData(){
     var emp = <Employee>{}
     emp.client = <client>{};
     this.clientObserver.next(emp);
     this.loggedObserver.next(false);
 }
  
 //Database call thru the API to check login Creds
  public ManagerLogIn(username:string,password:string):Observable<Employee>{
    
    return this.httpClient.get<Employee>(this.appService.baseApiUrl + "/Client/Confirmation/LogIn/"+username+"/"+password);
  }

  
  
  
}
