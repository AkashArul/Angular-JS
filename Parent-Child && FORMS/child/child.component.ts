
import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { empd } from '../int';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

@Input() emptable:empd[]=[];

@Output() delval : EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
  }
  del(eid:number){
      console.log(eid);
      this.delval.emit(eid);
     }
  

}
function output() {
  throw new Error('Function not implemented.');
}

