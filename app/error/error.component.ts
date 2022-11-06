import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  num: any;
  
  constructor() { }
  @Output() chngvalue :EventEmitter <number> = new EventEmitter();
  ngOnInit(): void {
  }
 increment(){
  this.num++;
  this.chngvalue.emit(this.num);
 }
}
