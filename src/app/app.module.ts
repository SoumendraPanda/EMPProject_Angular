import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/shared/header/header.component';
import { FooterComponent } from './Components/shared/footer/footer.component';
import { HomeComponent } from './Components/employee/home/home.component';
import { ReviewComponent } from './Components/employee/review/review.component';
import { PersonalComponent } from './Components/employee/personal/personal.component';
import { EducationComponent } from './Components/employee/education/education.component';
import { AddressComponent } from './Components/employee/address/address.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ReviewComponent,
    PersonalComponent,
    EducationComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

