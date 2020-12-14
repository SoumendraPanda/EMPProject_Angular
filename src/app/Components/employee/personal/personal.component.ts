import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import {Personal} from '../../../Model/personal';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  ngOnInit() {
    this.empModel.name=localStorage.getItem("name") ||"somu";
    
    this.empModel.dob=localStorage.getItem("dob")|| "12/12/2020";
    this.empModel.email=localStorage.getItem("email")|| "somupanda@gmail.com";
    this.empModel.hobby=localStorage.getItem("hobby")|| "coding";
  }
  

  name:string ="somu";
  dob:string="12/12/2020";
  email:string="somupanda@gmail.com";
  hobb:string="coding";

  constructor(){
    
  }

  hobby = ['Coding', 'Blogging',
  'Travel', 'Photography','Teaching'];

 //instance of the model class 
empModel= new Personal(this.name,this.dob,this.email,this.hobb);


  

check(){
  alert(this.empModel.name);
  localStorage.setItem("name",this.empModel.name);
  localStorage.setItem("dob",this.empModel.dob);
  localStorage.setItem("email",this.empModel.email);
  localStorage.setItem("hobby",this.empModel.hobby);
  
}



}
