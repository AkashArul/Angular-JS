import { AnimateTimings } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { agegtr } from '../vaildator/agevaild';

@Component({
  selector: 'app-reactform',
  templateUrl: './reactform.component.html',
  styleUrls: ['./reactform.component.css']
})
export class ReactformComponent implements OnInit {
  constructor() { }
  
   studdata: studdel[]=[];
  studfrom :FormGroup = new FormGroup({

    name: new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z]+$"),Validators.minLength(10),Validators.maxLength(15)]),
    address : new FormControl('',[Validators.required]),
    phoneno :new FormControl('',[Validators.required,Validators.minLength(10)]),
    age : new FormControl('',[agegtr,Validators.required]),
    email:new FormControl('',[Validators.required,Validators.minLength(10)]),
  });

  ngOnInit(): void {
  }

addstud(){
  console.log(this.studfrom.value);
  this.studdata = this.studfrom.value;
}

empd(){

  this.studfrom.setValue({
    name : 'akashkrish',
    address: 'kfkjsdkjdkjdsk',
    phoneno: 98948943983,
    age:23,
    email: 'kajsdfjk@gmail.com'

  })
}
patch(){
  this.studfrom.patchValue({
    name : 'akassh',
    address: 'kfkjsdkjdkjdsk',
    
    email: 'kajsdfj'

  })
}  

}

export interface studdel{
name:string,
address:string,
phoneno: number,
age: number,
email: string
  
}