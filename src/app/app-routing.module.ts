import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { AddComponentComponent } from './add-component/add-component.component';


const routes: Routes = [
  { path:'',pathMatch:'full',component:HomeComponent },
  { path:'add',component:AddComponent},
  {path:'list',component:ListComponent},
  { path:'list/edit/:id',component:EditComponent},
  { path:'list/addComponent/:id',component:AddComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }