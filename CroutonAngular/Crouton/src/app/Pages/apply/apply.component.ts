import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Applicant } from 'src/Models/ui-models/applicant.model';
import { Job } from 'src/Models/ui-models/Job.model';
import { JobsService } from '../jobs/jobs.service';
import { ApplyService } from './apply.service';



@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css'],
  
})
export class ApplyComponent implements OnInit {
  app:Applicant;
  jobs:Job[]=[]
  errorMessage:string =""

  constructor(appService:AppService,private applyService:ApplyService,
               private router:Router,private jobService:JobsService) { 

    this.app = <Applicant>{};
    this.SetJobs([]);
    
  }

  ngOnInit(): void 
  {
    this.jobService.jobsObserver.subscribe((v)=>{this.jobs = v});
    this.CallGet();
    }
  
  //All the setters needed for the UI
  UpdateFirstName(value:string){this.app.firstName=value};
  UpdateLastName(value:string){this.app.lastName=value};
  UpdatePhone(value:string){this.app.phone=value};
  UpdateEmail(value:string){this.app.email=value};
  UpdateAddress(value:string){this.app.address=value};
  UpdateCity(value:string){this.app.city=value};
  UpdateState(value:string){this.app.state=value};
  UpdatePosition(value:string){
    this.app.position.title = value;
    console.log("Updating job "+this.app.position.title);
  
  };
  UpdateNotes(value:string){this.app.notes=value};
  SetErrorMessage(value:string){this.errorMessage = value; }

  SetJobs(value:Array<Job>){this.jobService.jobsObserver.next(value);}
  
  //HTTP Request PUT
  CallPut(){
  this.applyService.PutApplicant(this.app).subscribe({
    next: this.OnReturnPutSuccess,
    error: (e)=>this.SetErrorMessage(e.name),
    complete: ()=>this.router.navigate(['/Applicants'])
  })}
  //Http Request GET
  CallGet(){
    let sub = this.jobService.FetchJobs().subscribe({
      next: this.OnReturnGetSuccess,
      error: (e)=>console.log(e.name),
      complete: ()=>this.OnCompleteGet
    });
  }

  //Http Return success functions
  OnReturnGetSuccess=(value:Array<Job>)=>{this.SetJobs(value);}
  OnReturnPutSuccess=()=>{}


  //Http Complete
  OnCompleteGet(){
    console.log("http has completed: "+this.jobs.length)
  }
  
  

}
