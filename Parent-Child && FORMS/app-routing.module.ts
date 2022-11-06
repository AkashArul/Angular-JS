import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent  } from './forms/forms.component';
import { ParentComponent } from './parent/parent.component';
import { ReactformComponent } from './reactform/reactform.component';

const routes: Routes = [
  {
    path : "forms",
    component : FormsComponent
  },
  {
    path: "parentchild",
    component : ParentComponent
  }, 
  {
    path: "rforms",
    component : ReactformComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
