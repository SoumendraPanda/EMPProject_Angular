import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/Model/address';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    this.adrsModel.addresstype=localStorage.getItem("addrsstype") ||"permanent";
    this.adrsModel.addressline1=localStorage.getItem("addressline1") || "sahoocolony";
    this.adrsModel.addressline2=localStorage.getItem("addressline2")||"kuchinda";
    this.adrsModel.state=localStorage.getItem("state")||"Odisha";

  }

        addresstype:string="permanent";
        addressline1: string="sahoocolony";
        addressline2: string="kuchinda";
        state: string="Odisha";
         city: string="Bhubaneswar";




  states=[ "Andhra Pradesh",
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jammu and Kashmir',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttarakhand',
  'Uttar Pradesh',
  'West Bengal']
  

//instance of the model class 
adrsModel=new Address(this.addresstype,this.addressline1,this.addressline2,this.state,this.city);


check(){
  alert(this.adrsModel.addresstype);
  localStorage.setItem("addresstype",this.adrsModel.addresstype);
  localStorage.setItem("addressline1",this.adrsModel.addressline1);
  localStorage.setItem("addressline2",this.adrsModel.addressline2);
  localStorage.setItem("state",this.adrsModel.state);
  localStorage.setItem("hcity",this.adrsModel.city);
  
}



}
