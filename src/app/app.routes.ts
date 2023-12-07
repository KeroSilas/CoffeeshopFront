import { Routes } from '@angular/router';
import { CoffeeDetailComponent } from './components/coffee-detail/coffee-detail.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import {CoffeeListComponent} from "./components/coffee-list/coffee-list.component";
import { ShoppingCartComponent } from "./components/cart/cart.component";

export const routes: Routes = [
  { path: '', redirectTo: 'coffee', pathMatch: 'full' },
  { path: 'coffee', component: CoffeeListComponent },
  { path: 'coffee/:id', component: CoffeeDetailComponent },
  //{ path: 'coffee/create', component: CustomCoffeeComponent }, // Create custom coffee
  { path: 'cart', component: ShoppingCartComponent }, // Shopping cart details
  //{ path: 'order', component: OrderComponent }, // Ordering process
  //{ path: 'administration/dashboard', component: AdminDashboardComponent }, // Overview of upcoming orders, etc.
  //{ path: 'administration/orders', component: AdminOrdersComponent }, // List of orders
  //{ path: 'administration/coffee', component: AdminCoffeeComponent }, // List of coffee
  //{ path: 'administration/users', component: AdminUsersComponent }, // List of users
  //{ path: 'user/:id', component: UserComponent }, // Profile page
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' },
];
