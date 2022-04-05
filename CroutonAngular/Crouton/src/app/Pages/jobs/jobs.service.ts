import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { Job } from 'src/Models/ui-models/Job.model';
import { JobsComponent } from './jobs.component';
@Injectable({
  providedIn: 'root'
})
export class JobsService {

  public jobs : Job[] = []
  public jobsObserver = new BehaviorSubject<Array<Job>>(this.jobs);

  constructor(private httpClient:HttpClient,private appService:AppService) {
    //this.jobsObserver.subscribe((v) => {this.jobs = v});
  }

   
   FetchJobs():Observable<Array<Job>>{
    return this.httpClient.get<Array<Job>>(this.appService.baseApiUrl+"/Jobs/ReturnAll");
   }
   PostJob(title:string, wage:string):Observable<Job>{
    let value = <Job>{}
    value.title = title;
    value.startWage = "$"+wage;
    return this.httpClient.post<Job>(this.appService.baseApiUrl + "/Jobs/PostOne",value);
   }
  DeleteJob(id:String):Observable<Job>{
    return this.httpClient.delete<Job>(this.appService.baseApiUrl+"/Jobs/DeleteOne/"+id);

  }

}

