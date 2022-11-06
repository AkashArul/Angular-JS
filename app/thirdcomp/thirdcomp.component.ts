import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-thirdcomp',
  templateUrl: './thirdcomp.component.html',
  styleUrls: ['./thirdcomp.component.css']
})
export class ThirdcompComponent implements OnInit {
  id: any;

  constructor(private route: ActivatedRoute) {  }
  sdtlist :any[]=[
    {name : "akash",
    subject : "social",
    class : "4th",
    mark: "88",
  },
  {name : "krish",
    subject : "science",
    class : "5th",
    mark: "89",
  }]

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      console.log(params);
      this.id = params["id"]
    });
  }
  signin:boolean = false;
  create:boolean = false; 
  pipe:boolean = false;
  forms:boolean = false;
  forng:boolean = true;

  pipes(){
    this.pipe =true;
    this.forms = false;
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

