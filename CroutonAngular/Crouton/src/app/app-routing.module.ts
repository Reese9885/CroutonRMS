import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffCardComponent } from './Cards/staff-card/staff-card.component';
import { SideBarSettingsComponent } from './Nav/SideBar/side-bar-settings/side-bar-settings.component';
import { SideBarStaffingComponent } from './Nav/SideBar/side-bar-staffing/side-bar-staffing.component';
import { ApplicantsComponent } from './Pages/applicants/applicants.component';
import { ApplyComponent } from './Pages/apply/apply.component';
import { ClientLoginComponent } from './Pages/client-login/client-login.component';
import { JobsComponent } from './Pages/jobs/jobs.component';
import { MainComponent } from './Pages/main/main.component';
import { SettingsComponent } from './Pages/settings/settings.component';
import { StaffingComponent } from './Pages/staffing/staffing.component';

const routes: Routes = [
  {
    path:'Staffing',
    component:StaffingComponent
  },
  {
    path:'',
    component:ClientLoginComponent
  },
  {
    path:'main',
    component:MainComponent
  },
  
  {
    path:'Staffing',
    component:SideBarStaffingComponent,
    outlet:"sideBar"
  },
  {
    path:'Apply',
    component:ApplyComponent
  },
  {
    path:'Settings',
    component:SettingsComponent
  },
  {
    path:'JobSettings',
    component:JobsComponent
  },
  {
    path:'Settings',
    component:SideBarSettingsComponent,
    outlet:"sideBar"
  },
  {
    path:'Applicants',
    component:ApplicantsComponent,
  },
  


  //For Developing purposes only
  {
    path:'Developing',
    component:ApplicantsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
