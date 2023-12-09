import { Routes } from '@angular/router';
import { CoffeeDetailComponent } from './components/coffee-detail/coffee-detail.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import {CoffeeListComponent} from "./components/coffee-list/coffee-list.component";
import {AdminDashboardComponent} from "./components/admin-dashboard/admin-dashboard.component";
import {AdminOrdersComponent} from "./components/admin-orders/admin-orders.component";
import {AdminCoffeesComponent} from "./components/admin-coffees/admin-coffees.component";
import {AdminUsersComponent} from "./components/admin-users/admin-users.component";
//import { ShoppingCartComponent } from "./components/cart/cart.component";

export let routes: Routes;
routes = [
  {path: '', redirectTo: 'coffee', pathMatch: 'full'},
  {path: 'coffee', component: CoffeeListComponent},
  {path: 'coffee/:id', component: CoffeeDetailComponent},
  //{ path: 'coffee/create', component: CustomCoffeeComponent }, // Create custom coffee
  //{ path: 'cart', component: ShoppingCartComponent }, // Shopping cart details
  //{ path: 'order', component: OrderComponent }, // Ordering process
  {path: 'admin', component: AdminDashboardComponent}, // Overview of upcoming orders, etc.
  {path: 'admin/orders', component: AdminOrdersComponent}, // List of orders
  {path: 'admin/coffees', component: AdminCoffeesComponent}, // List of coffee
  {path: 'admin/users', component: AdminUsersComponent}, // List of users
  //{ path: 'user/:id', component: UserComponent }, // Profile page
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: ''},
];
