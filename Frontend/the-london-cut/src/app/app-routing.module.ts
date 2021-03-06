import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from './components/inventory/item/item.component';
import { ItemCreateComponent } from './components/inventory/item-create/item-create.component';
import { AdminComponent } from './components/admin/admin.component';
import { OrderManagementComponent } from './components/order-management/order-management.component';
import { LandingComponent } from './components/landing/landing.component';
import { RentComponent } from './components/inventory/rent/rent.component';
import { EmployeeManagementComponent } from './components/employee-management/employee-management.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { AuthGuard } from './auth/auth.guard';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { PreviousComponent } from './components/appointment/previous/previous.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full'},
  { path: 'index', component: LandingComponent },
  { path: 'inventory', component: ItemComponent, canActivate: [AuthGuard] },
  { path: 'item-create', component: ItemCreateComponent, canActivate: [AuthGuard] },
  { path: 'inventory/edit/:id', component: ItemCreateComponent, canActivate: [AuthGuard] },
  { path: 'rent/:id', component: RentComponent, canActivate: [AuthGuard] },

  { path: 'signup', component: UserComponent,
    children: [{ path: '', component: SignUpComponent }]
  },

  { path: 'login', component: UserComponent,
    children: [{ path: '', component: SignInComponent }]
  },

  { path: 'userprofile', component: UserProfileComponent, canActivate: [AuthGuard] },

  { path: 'ordermng', component: OrderManagementComponent, canActivate: [AuthGuard] },
  { path: 'employee', component: EmployeeManagementComponent, canActivate: [AuthGuard] },
  { path: 'appointment', component: AppointmentComponent, canActivate: [AuthGuard] },
  { path: 'previous', component: PreviousComponent},

  // Admin
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

 }
