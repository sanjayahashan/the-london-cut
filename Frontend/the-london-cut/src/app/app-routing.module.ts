import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from './components/inventory/item/item.component';
import { ItemCreateComponent } from './components/inventory/item-create/item-create.component';
import { AdminComponent } from './components/admin/admin.component';
import { OrderManagementComponent } from './components/order-management/order-management.component';
import { LandingComponent } from './components/landing/landing.component';
import { RentComponent } from './components/inventory/rent/rent.component';
import { EmployeeManagementComponent } from './components/employee-management/employee-management.component';

const routes: Routes = [
  { path: '', component: LandingComponent},
  { path: 'inventory', component: ItemComponent },
  { path: 'item-create', component: ItemCreateComponent},
  { path: 'inventory/edit/:id', component: ItemCreateComponent},
  { path: 'rent/:id', component: RentComponent},

  { path: 'ordermng', component: OrderManagementComponent},
  { path: 'employee', component: EmployeeManagementComponent},


  // Admin
  { path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

 }
