import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Employee } from 'src/Models/ui-models/Employee.model';
import { StaffingService } from './staffing.service';

@Component({
  selector: 'app-staffing',
  templateUrl: './staffing.component.html',
  styleUrls: ['./staffing.component.css']
})
export class StaffingComponent implements OnInit {

  constructor(private cardService:StaffingService,private appService:AppService) { }

  employees : Array<Employee> = [];

  ngOnInit(): void {
    this.appService.employeesObserver.subscribe((v) => {this.employees = v});
    this.GetAllEmployees();
    
  }

  //Htttp Request GET All
  GetAllEmployees(){
    let sub = this.cardService.FetchAllEmployees().subscribe({
      next: this.OnReturnSuccess,
      error: (e)=>console.log(e),
      complete: ()=>console.log("Complete Transer")
  })
  }
  //Http Success Return
  OnReturnSuccess=(emps:Array<Employee>)=>{
    this.appService.ResetEmployees();
    this.appService.SetEmployees(emps);
    
  }
  

}
