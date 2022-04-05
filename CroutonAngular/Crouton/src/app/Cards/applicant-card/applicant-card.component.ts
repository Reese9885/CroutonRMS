import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicantService } from 'src/app/Pages/applicants/applicant.service';
import { Applicant } from 'src/Models/ui-models/applicant.model';
import { Employee } from 'src/Models/ui-models/Employee.model';

@Component({
  selector: 'app-applicant-card',
  templateUrl: './applicant-card.component.html',
  styleUrls: ['./applicant-card.component.css']
})
export class ApplicantCardComponent implements OnInit {

  @Input() applicant:Applicant = <Applicant>{};
  @Input() id:string ="";

  constructor(private applicantService:ApplicantService,private router:Router) { }

  ngOnInit(): void {
  }

  //Calls Http Employee Delete function
  CallDelete(id:string){
    this.applicantService.DeleteEmployee(id).subscribe({
      next: this.OnReturnDeleteSuccess,
      error: (e)=>console.log(e),
      complete: ()=>this.router.navigate(['/Applicants'])
    });
    
  }
  //Event: Called from html
  OnClickUpdate(applicant:Applicant){
    this.applicantService.UpdateEmployee(applicant);
  }

  //Http success call
  OnReturnDeleteSuccess=(applicant:Applicant)=>{
    console.log("Deleting Applicant")
  }

}
