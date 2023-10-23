import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HubComponent } from './hub/hub.component';
import { E404Component } from './e404/e404.component';
import { AboutComponent } from './about/about.component';
import { LandlordRegisterComponent } from './landlord/landlord-register/landlord-register.component';
import { RenterRegisterComponent } from './renter/renter-register/renter-register.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: "", redirectTo: "/hub", pathMatch: "full" },
  { path: "hub", component: HubComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "landlord/landlord-register", component: LandlordRegisterComponent },
  { path: "renter/renter-register", component: RenterRegisterComponent },
  
  { path: "about", component: AboutComponent },
  { path: "**", component: E404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
