import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponent } from './components/delete/delete.component';
import { ListComponent } from './components/list/list.component';
import { UpdateComponent } from './components/update/update.component';



const routes: Routes = [
  {
    path:"",
    component: ListComponent
  },
  {
    path:"update/:id",
    component: UpdateComponent
  },
  // {
  //   path:"/delete/:id",
  //   component: DeleteComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
