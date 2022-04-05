import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobsService } from 'src/app/Pages/jobs/jobs.service';
import { Job } from 'src/Models/ui-models/Job.model';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent implements OnInit {


  @Input() job:Job = <Job>{};
  @Input() id:string ="";


  constructor(private jobService:JobsService,private router:Router) { }

  ngOnInit(): void {
  }

  //Http Call delete function
  CallDelete(id:string){
    this.jobService.DeleteJob(id).subscribe({
      next: this.OnReturnDeleteSuccess,
      error: (e)=>console.log(e),
      complete: ()=>this.router.navigate(['/JobSettings'])
    });
    
  }
  //Event: from this html
  OnClickUpdate(id:string){
    this.jobService.DeleteJob(id);
  }

  //Http Return success
  OnReturnDeleteSuccess=(job:Job)=>{
    console.log("Deleting job")
  }

}
