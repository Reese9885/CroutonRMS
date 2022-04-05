import { Component, Input, OnInit } from '@angular/core';
import { ClientLoginService } from './client-login.service';
import { Employee } from 'src/Models/ui-models/Employee.model';
import {Router} from "@angular/router";
import { client } from 'src/Models/ui-models/client.model';
import { Job } from 'src/Models/ui-models/Job.model';

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.css']
})
export class ClientLoginComponent implements OnInit {

  private userName = "";
  private password = "";
  public errorMessage = "";
  employee = <Employee>{};
  


  constructor(private clientLogServices : ClientLoginService,
              private router:Router,
              ) {}
   

  ngOnInit(): void {
     
  }

  //Setters for properties
  SetUserName(value:string){
    if(typeof value === 'string')this.userName = value;}
  SetPassword(value:string){
    if(typeof value === 'string')this.password = value;}    
  
  //Http Request GET
  LogIn(){
    this.clientLogServices.ResetClientData();
    this.errorMessage = "";
        let sub = this.clientLogServices.ManagerLogIn(this.userName,this.password).subscribe({
          next: this.OnReturnSuccess,
          error: (e)=>console.log(e),
          complete: ()=>console.log("Complete Transer")
      })
  }
  DevLogIn(value:number){
    this.employee.client = <client>{};
    this.employee.position = <Job>{};
    this.employee.position.title = "Employee"; 
    switch (value) {
      case 1:
      this.employee.client.isAdmin = true;
      this.employee.client.isAdmin = true; 
      this.employee.position.title = "Owner";       
        break;
      case 2:
        this.employee.client.isManager = true;
        this.employee.position.title = "Manager"; 
    }
    this.employee.id = "1";
    this.OnReturnSuccess(this.employee);
  }

  //Http Success Return
  OnReturnSuccess=(employee:Employee)=>{
    if(employee.id != "-1"){ 
      employee.client.authToken = "active"; // !!! Change when setup tokens
      this.clientLogServices.ChangeEmpoyeeData(employee);
      this.clientLogServices.SetLoggedStatus(true);
      this.router.navigate(['/main'])
    }
    else this.OnReturnError(employee)
  }
 
  //Http Error Return
  OnReturnError(employee:Employee){
    if(employee.id == "-1") console.log(employee.address) }

  
  

}

