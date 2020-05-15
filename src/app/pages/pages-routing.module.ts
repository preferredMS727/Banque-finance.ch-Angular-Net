import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FocusComponent } from './focus/focus.component';
import { EditorialComponent } from './editorial/editorial.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'focus',
    component: FocusComponent
  },
  {
    path: 'editorial',
    component: EditorialComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
