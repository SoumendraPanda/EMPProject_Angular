import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/Model/education';
import { Skill } from 'src/app/Model/skill'


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  
  
  ngOnInit() {
   
    this.getSkill();
    this.eduModel.institutename=localStorage.getItem("institutename") ||"ITER";
    this.eduModel.degree=localStorage.getItem("degree")|| "BTECH";
    this.eduModel.yearofcompletion=localStorage.getItem("yearofcompletion")|| "12/12/2020";
    this.skills = JSON.parse(localStorage.getItem("skills")!);
     
  }
 
  

  constructor() { }
  institutename:string ="ITER";
  degree: string="BTECH";
  yearofcompletion: string="12/12/2020";
  skills: string[] = [];
 
  eduModel=new Education(this.institutename,this.degree,this.yearofcompletion, this.skills);

  skillList: Skill[] = [];
  public getSkill () {
    this.skillList=[
      {'id':1, 'name': 'Java', ischecked: false},
      {'id':2, 'name': 'Selenium', ischecked: false},
      {'id':3, 'name': 'Angular', ischecked: false},
      {'id':4, 'name': 'Python', ischecked: false},
      {'id':5, 'name': 'React', ischecked: false},
      {'id':6, 'name': 'SQL', ischecked: false},
    ]

  }

check(){
  alert(this.eduModel.institutename);
  localStorage.setItem("institutename",this.eduModel.institutename);
  localStorage.setItem("degree",this.eduModel.degree);
  localStorage.setItem("yearofcompletion",this.eduModel.yearofcompletion);  
  localStorage.setItem("skills", JSON.stringify(this.skills));
  
}
public onchange() {
 
    this.skills= []; 
    this.skillList.forEach((value) => {
      if (value.ischecked) {
        this.skills.push(value.name);
      }
    });
    console.log(this.skills);
}
}


