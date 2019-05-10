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
<<<<<<< HEAD
import { TypePipe } from './pipes/type.pipe';
=======
import { AdminComponent } from './components/admin/admin.component';
import { OrderManagementComponent } from './components/order-management/order-management.component';
import { LandingComponent } from './components/landing/landing.component';
>>>>>>> c7202df5a9b15ede496e32b43e18dd21ba1b538b

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemCreateComponent,
<<<<<<< HEAD
    TypePipe
=======
    AdminComponent,
    OrderManagementComponent,
    LandingComponent,
>>>>>>> c7202df5a9b15ede496e32b43e18dd21ba1b538b
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
