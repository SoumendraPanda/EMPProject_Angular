import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/Model/education';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  
  
  ngOnInit() {
   
   
    this.eduModel.institutename=localStorage.getItem("institutename") ||"ITER";
    this.eduModel.degree=localStorage.getItem("degree")|| "BTECH";
    this.eduModel.yearofcompletion=localStorage.getItem("yearofcompletion")|| "12/12/2020";
     
  }
 
  

  constructor() { }
  institutename:string ="ITER";
  degree: string="BTECH";
  yearofcompletion: string="12/12/2020";
  skills: string[] = [];
  skill: string="";
  List= ['java', 'python', 'sql', 'c++'];
  
  



  eduModel=new Education(this.institutename,this.degree,this.yearofcompletion, this.skills, this.skill);

  


check(){
  alert(this.eduModel.institutename);
  localStorage.setItem("institutename",this.eduModel.institutename);
  localStorage.setItem("degree",this.eduModel.degree);
  localStorage.setItem("yearofcompletion",this.eduModel.yearofcompletion);
 
  
  
}
}


