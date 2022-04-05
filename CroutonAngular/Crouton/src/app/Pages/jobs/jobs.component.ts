import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { Job } from 'src/Models/ui-models/Job.model';
import { JobsService } from './jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  public jobs : Array<Job> = [];

  title = "";
  wage = <string>"0.00";
  errorMessage ="";
  
  constructor(private jobService:JobsService ,private router:Router) {
   }

  ngOnInit(): void {
    this.jobService.jobsObserver.subscribe((v) => {this.jobs = v});
    this.CallGet();
  }

  SetJobs(values:Array<Job>){
    //this.ResetJobs();
    this.jobService.jobsObserver.next(values)
    console.log("Jobs Loaded: "+this.jobs.length);//xxx
   }
   ResetJobs(){
    this.jobService.jobsObserver.next([]);
   }
   UpdateJobs(value:Array<Job>){
    this.jobService.jobsObserver.next(value);
   }
   GetJobs():Array<Job>{
    return this.jobs;
   }

  SetTitle(value:string){
    this.title = value;
  }
  SetWage(value:string){
    if(!isNaN(Number(value))){
      this.wage = value;
      this.SetMessage("")
    }
    else this.SetMessage("Wage field isnt a number");
  }
  CallPost(){
    let sub = this.jobService.PostJob(this.title,this.wage).subscribe({
      next: this.OnReturnPostSuccess,
      error: (e)=>this.SetMessage(e.name),
      complete: ()=> this.CallGet()
    })
  }
  CallGet(){
    let sub = this.jobService.FetchJobs().subscribe({
      next: this.OnReturnGetSuccess,
      error: (e)=>this.SetMessage(e.name),
      complete: ()=>{console.log("Complete transfer")}
    })
  }

  OnReturnPostSuccess(){
    console.log("HTTP Post was Successfull");
    
    //
  }
  OnReturnGetSuccess=(value:Array<Job>)=>{
    console.log("HTTP Get was Successfull "+value.length);
    this.SetJobs(value);
  }

  SetMessage(value:string){
    this.errorMessage = value;
  }
  navigateToSelf() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = "reload";
    const self = ".";
    this.router.navigate([self]);
  }

}
