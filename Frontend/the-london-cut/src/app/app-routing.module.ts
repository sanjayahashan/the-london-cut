import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from './components/inventory/item/item.component';
import { ItemCreateComponent } from './components/inventory/item-create/item-create.component';

const routes: Routes = [
  { path: 'inventory', component: ItemComponent },
  { path: 'inventory/create', component: ItemCreateComponent},
  { path: 'inventory/edit/:id', component: ItemCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

 }
