import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondcomp',
  templateUrl: './secondcomp.component.html',
  styleUrls: ['./secondcomp.component.css']                                      
})
export class SecondcompComponent implements OnInit {

  constructor() { }

  @Input() stdunt:any[] =[{
    name : "akash",
    subject : "social",
    class : "4th",
    mark: "88",                                                                                                                           
  },
  {name : "krish",
    subject : "science", 
    class : "5th",
    mark: "89",
  },
  {name : "Deevi",
  subject : "science",
  class : "th",
  mark: "89",
}
]

  ngOnInit(): void {
  }
  signin:boolean = false;
  create:boolean = false; 
  pipe:boolean = true;
  forms:boolean = false;
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
     this.pipe =false;

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
