import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private httpClient:HttpClient,private appService:AppService) { }

  
}
