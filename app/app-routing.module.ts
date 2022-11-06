import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { FirstcompComponent } from './firstcomp/firstcomp.component';
import { HeaderComponent } from './header/header.component';
import { SecondcompComponent } from './secondcomp/secondcomp.component';
import { ThirdcompComponent } from './thirdcomp/thirdcomp.component';

const Rpath: Routes = [
  {
    path : 'pipes',
    component : SecondcompComponent 
  },
    {
      path : 'homes',
      component : FirstcompComponent 
    },
    {
      path : 'forng/:id',
      component : ThirdcompComponent 
    },
    {
      path : ' ',
      component : HeaderComponent
    },
    {
      path :'**',
      component : ErrorComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(Rpath)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
