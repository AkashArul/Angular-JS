import { Component,Input, OnInit } from '@angular/core';
import { FirstcompComponent } from '../firstcomp/firstcomp.component';
import { SecondcompComponent } from '../secondcomp/secondcomp.component';
import { ThirdcompComponent } from '../thirdcomp/thirdcomp.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  @Input() footbar:any[] = [
    {
      pname : "homes",
      plink : "/homes",
      component : FirstcompComponent
    },
    {
      pname : "pipes",
      plink : "/pipes",
      Component : SecondcompComponent
    },
    {
      pname : "NG-FOR & STYLE",
      plink : "/forng/444",
      Component : ThirdcompComponent
    }
  ]

  ngOnInit(): void {
  }

}
