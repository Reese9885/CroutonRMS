import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { StaffingService } from 'src/app/Pages/staffing/staffing.service';
import { Employee } from 'src/Models/ui-models/Employee.model';

@Component({
  selector: 'app-staff-card',
  templateUrl: './staff-card.component.html',
  styleUrls: ['./staff-card.component.css']
})
export class StaffCardComponent implements OnInit {
  
  @Input() employee:Employee = <Employee>{};
  @Input() id:string ="";


  constructor(private staffService:StaffingService,private router:Router) { }

  ngOnInit(): void {
  }

  //Http Employee Delete function
  CallDelete(id:string){
    this.staffService.DeleteEmployee(id).subscribe({
      next: this.OnReturnDeleteSuccess,
      error: (e)=>console.log(e),
      complete: ()=>this.router.navigate(['/Staffing'])
    });
    
  }
  
  //Event: from this html
  OnClickUpdate(employee:Employee){
    this.staffService.UpdateEmployee(employee);
  }

  //Http return success
  OnReturnDeleteSuccess=(emp:Employee)=>{
    console.log("Deleting Emp")
  }

}
