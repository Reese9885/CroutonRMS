import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from 'src/Models/ui-models/Employee.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public baseApiUrl = "https://localhost:5001";

  private employees : Array<Employee> = [];
  public employeesObserver = new BehaviorSubject<Array<Employee>>(this.employees);

  

  constructor() {
    this.employeesObserver.subscribe((v) => {this.employees = v});
    
   }

   SetEmployees(values:Array<Employee>){
    this.ResetEmployees();
    this.employeesObserver.next(values);
    console.log("Employees Loaded: "+this.employees.length);//xxx
   }
   ResetEmployees(){
    this.employeesObserver.next([]);
    console.log("AppEmp: "+this.employees.length)
   }

   
}
