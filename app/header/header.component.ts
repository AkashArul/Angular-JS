import { getNumberOfCurrencyDigits } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  

  constructor(private route: ActivatedRoute) { }
  num :number = 10;
  clickcounte :number | undefined; 
  @Output() chngnum : EventEmitter <number> = new EventEmitter();
  ngOnInit(): void {

  }
  increment(){
    this.num++;
    this.chngnum.emit(this.num);
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




