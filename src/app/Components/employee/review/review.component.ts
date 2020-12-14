import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  constructor() { }
  name:string=localStorage.getItem("name") ||"somu";
  dob:string=localStorage.getItem("dob")|| "12/12/2020";
  email:string=localStorage.getItem("email")|| "somupanda@gmail.com";
  hobby:string=localStorage.getItem("hobby")|| "coding";

  
  addresstype:string=localStorage.getItem("addrsstype") ||"permanent";
  addressline1: string=localStorage.getItem("addressline1") ||"sahoocolony";
  addressline2: string=localStorage.getItem("addressline2")||"kuchinda";
  state: string=localStorage.getItem("state")||"Odisha";

  institutename:string =localStorage.getItem("institutename") ||"ITER";
  degree: string=localStorage.getItem("degree")||"BTECH";
  yearofcompletion: string=localStorage.getItem("yearofcompletion")||"12/12/2020";
 skills: string[] = JSON.parse(localStorage.getItem("skills")!);

  ngOnInit(): void {
  }


 public submit(){
  alert("Thank You,Your Data Is Saved!")
}

}
