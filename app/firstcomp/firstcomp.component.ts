  import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firstcomp',
  templateUrl: './firstcomp.component.html',
  styleUrls: ['./firstcomp.component.css']
})
export class FirstcompComponent implements OnInit {
  
  studdt:boolean = false;
  firstName:string = "Akash";
  lastName:string= "krish";
  isDisable:boolean = false;
  student:any =[{
    id: 102,
    name:"vels",
    DOB : 100112,
    class: "4th"
  },{
    id: 102,
    name:"Akash",
    DOB : 100112,
    class: "4th"
  }]
  
  constructor() { }

  ngOnInit(): void {
    this.chngeupper();
    this.printobj();
  }

  chngeupper(){
    console.log(this.student);
  }
  sum(){
    console.log("submitted"); 
    this.firstName= "vishwa";
    this.lastName = "sekar";
   console.table(this.student);
   this.studdt= true;
  }
  signin:boolean = true;
  create:boolean = false; 
  pipe:boolean = false;
  forms:boolean = true;
  forng:boolean = false;

  pipes(){
    this.pipe =true;
    this.forms = false;
    this.forng = false;
  }

  sign()  
  {
    this.forms =true;
     this.create=  false;
     this.signin=  true;
    // this.pipe =false;

  }
  creat(){
    this.forms =true;
    this.create= true;
    this.signin = false;
    this.pipe =false;
  }
  form(){
    this.forms=true;
    this.pipe = false;
    this.forng = false;

  }
  forngs(){
    this.forms=false;
    this.pipe = false;
    this.forng = true;
  }

  public slist:list[] =[
    {
    Sname:"akash",
    Sid: 102,
    Sage:12,
    Sclass: "4th"
  },
  {
    Sname:"krish",
    Sid: 101,
    Sage:12,
    Sclass: "4th"
  },
  {
    Sname:"vishwa",
    Sid: 103,
    Sage:12,
    Sclass: "4th"
  }
]
 todayDate= new Date();
  amount = 9876;
  message = "Pipe Concept";
 
printobj(){
  console.log(this.slist);
}

}
export interface list{
 Sname:string;
 Sid : number;
 Sage : number;
 Sclass : string;
}

