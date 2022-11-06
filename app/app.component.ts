import { Component } from '@angular/core';
import { ErrorComponent } from './error/error.component';
import { FirstcompComponent } from './firstcomp/firstcomp.component';
import { SecondcompComponent } from './secondcomp/secondcomp.component';
import { ThirdcompComponent } from './thirdcomp/thirdcomp.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fristproject';

  newfoot:any [] =[
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
    },
    {
      pname : "Error",
      plink : "/**",
      Component : ErrorComponent
    }
  ]
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
  clickcounte: number | undefined;
  ClickCounter: number | undefined;

  numfun(num:number){
    this.ClickCounter = num;
    console.log(num);
  }
  
}

  