import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  job = "";
  wage = <number>0.00;
  errorMessage ="";
  constructor() { }

  ngOnInit(): void {
  }
  SetJob(value:string){
    this.job = value;
  }
  SetWage(value:number){
    if(!isNaN(value)){
      this.wage = value;
      this.SetMessage("")
    }
    else this.SetMessage("Wage field isnt a number");
  }
  PostJob(){

  }
  SetMessage(value:string){
    this.errorMessage = value;
  }

}
