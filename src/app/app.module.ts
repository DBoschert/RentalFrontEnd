import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RenterRegisterComponent } from './renter/renter-register/renter-register.component';
import { LandlordRegisterComponent } from './landlord/landlord-register/landlord-register.component';
import { MenuComponent } from './menu/menu/menu.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    RenterRegisterComponent,
    LandlordRegisterComponent,
    MenuComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
