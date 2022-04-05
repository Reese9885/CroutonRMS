import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { Applicant } from 'src/Models/ui-models/applicant.model';
import { ApplicantService } from './applicant.service';

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.css']
})
export class ApplicantsComponent implements OnInit {

  public applicants:Array<Applicant> = [];

  constructor(private applicantService:ApplicantService,private appService:AppService) { 
  }

  //Get all applicants at load
  ngOnInit(): void {
    this.CallGetAll();   
  }

  //Http Call to Get all Employees
  CallGetAll(){
    let sub = this.applicantService.FetchAllEmployees().subscribe({
      next: this.OnReturnSuccess,
      error: (e)=>console.log(e),
      complete: ()=>console.log("Complete Transer")
  })
  }

  //Clears the List of employees out for reload
  ResetApplicants(){this.applicants = [];}
  SetApplicants(value:Array<Applicant>){this.applicants=value}

  //Http return success
  OnReturnSuccess=(applicant:Array<Applicant>)=>{
    this.ResetApplicants();
    this.SetApplicants(applicant);
  }

}
