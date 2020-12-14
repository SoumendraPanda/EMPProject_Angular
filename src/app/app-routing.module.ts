import { EducationComponent } from './Components/employee/education/education.component';
import { PersonalComponent } from './Components/employee/personal/personal.component';
import { AddressComponent } from './Components/employee/address/address.component';
import { ReviewComponent } from './Components/employee/review/review.component';
import { HomeComponent } from './Components/employee/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'personal', component: PersonalComponent },
  { path: 'education', component: EducationComponent },
  { path: 'address', component: AddressComponent },
  { path: 'review', component: ReviewComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
