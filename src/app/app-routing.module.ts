import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';

const routes: Routes = [
  {
    path:'test',
    component:TestComponent
  },
  {
    path:'test2',
    component:Test2Component
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/test'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:false})],
  /*
If false, and I try to hit http://localhost:8080/test, /test will go to the server
and fail with 404.
If true, http://localhost:8080/#test will be the url and /test wil not go to the server
  */
  exports: [RouterModule]
})
export class AppRoutingModule { }
