import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { LoginComponent } from './components/pages/login/login.component';
import { TicketsComponent } from './components/pages/tickets/tickets.component';
import { TicketPageComponent } from './components/pages/ticket-page/ticket-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';

const routes: Routes = [
  { path:'', component:WelcomeComponent},
  { path:'welcome-page', component:WelcomeComponent},
  { path:'tickets', component:TicketsComponent},
  { path:'search/:searchTerm', component:TicketsComponent},
  { path:'tag/:tag', component:TicketsComponent},
  { path:'register', component:RegisterComponent},
  { path:'login', component:LoginComponent},
  { path:'tickets/:id', component:TicketPageComponent},
  { path:'cart-page', component:CartPageComponent},
  { path:'profile', component:ProfileComponent},
  { path:'checkout', component:CheckoutPageComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
