import { Component, OnInit } from '@angular/core';
import { empd } from '../int';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }
  employee : empd[] =[
    {
      Name : 'Akash',
      rollno :201,
      class : "4th",
      mark: 90
    },
    {
      Name : 'vishwa',
      rollno :202,
      class : "4th",
      mark: 90
    },
    {
      Name : 'asik',
      rollno :203,
      class : "4th",
      mark: 90
    },
    {
      Name : 'aswin',
      rollno :204,
      class : "4th",
      mark: 90
    },
    {
      Name : 'abi',
      rollno :205,
      class : "4th",
      mark: 90
    }


  ]
  ngOnInit(): void {
  }

  updateemp(eid: number){
    console.log(eid);
    this.employee = this.employee.filter(emp => emp.rollno != eid);
  }

}
