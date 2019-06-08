import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './components/inventory/item/item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ItemCreateComponent } from './components/inventory/item-create/item-create.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminComponent } from './components/admin/admin.component';
import { OrderManagementComponent } from './components/order-management/order-management.component';
import { LandingComponent } from './components/landing/landing.component';
import { RentComponent } from './components/inventory/rent/rent.component';
import { EmployeeManagementComponent } from './components/employee-management/employee-management.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgBootstrapModule } from './shared/ng-bootstrap/ng-bootstrap.module';

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
    NgBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
