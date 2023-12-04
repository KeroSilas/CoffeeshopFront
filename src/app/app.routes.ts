import { Routes } from '@angular/router';
import {AddCoffeeComponent} from "./add-coffee/add-coffee.component";
import {CoffeeDetailComponent} from "./coffee-detail/coffee-detail.component";
import {SignupComponent} from "./signup/signup.component";
import {LoginComponent} from "./login/login.component";

export const routes: Routes = [
  { path: '', redirectTo: 'coffee', pathMatch: 'full' },
  { path: 'coffee', component: AddCoffeeComponent },
  { path: 'coffee/:id', component: CoffeeDetailComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];
