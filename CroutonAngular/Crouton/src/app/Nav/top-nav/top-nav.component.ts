import { Component, OnInit } from '@angular/core';
import { ClientLoginService } from 'src/app/Pages/client-login/client-login.service';
import { Employee } from 'src/Models/ui-models/Employee.model';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  public client:Employee;
  public loggedIn:boolean;
  constructor(public clientService:ClientLoginService) 
  {
    this.client = clientService.GetClientData();
    this.loggedIn = false;
  }


  ngOnInit(): void {
    this.clientService.clientObserver.subscribe(value => {this.client=value});
    this.clientService.loggedObserver.subscribe(value => {this.loggedIn=value});
    this.clientService.CheckToken();
    

  }
  
}
