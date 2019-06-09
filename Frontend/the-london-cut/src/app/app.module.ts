import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './components/inventory/item/item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ItemCreateComponent } from './components/inventory/item-create/item-create.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminComponent } from './components/admin/admin.component';
import { OrderManagementComponent } from './components/order-management/order-management.component';
import { LandingComponent } from './components/landing/landing.component';
import { RentComponent } from './components/inventory/rent/rent.component';
import { EmployeeManagementComponent } from './components/employee-management/employee-management.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { NgBootstrapModule } from './shared/ng-bootstrap/ng-bootstrap.module';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import { SideMenuComponent } from './components/admin/side-menu/side-menu.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { PreviousComponent } from './components/appointment/previous/previous.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemCreateComponent,
    AdminComponent,
    OrderManagementComponent,
    LandingComponent,
    RentComponent,
    EmployeeManagementComponent,
    NavbarComponent,
    UserComponent,
    SignUpComponent,
    UserProfileComponent,
    SignInComponent,
    SideMenuComponent,
    AppointmentComponent,
    PreviousComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgBootstrapModule,
    MatCardModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
