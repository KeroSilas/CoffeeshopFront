import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CoffeeListComponent } from './components/coffee-list/coffee-list.component';
import { CoffeeDetailComponent } from './components/coffee-detail/coffee-detail.component';
import { HeaderComponent } from './components/header/header.component';
import {AdminUsersComponent} from "./components/admin-users/admin-users.component";
import {AdminDashboardComponent} from "./components/admin-dashboard/admin-dashboard.component";
import {AdminOrdersComponent} from "./components/admin-orders/admin-orders.component";
import {ShoppingCartComponent} from "./components/shopping-cart/shopping-cart.component";
import {CustCoffeeComponent} from "./components/cust-coffee/cust-coffee.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    HttpClientModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatBadgeModule,
    MatSnackBarModule,
    CoffeeListComponent,
    CoffeeDetailComponent,
    AdminUsersComponent,
    AdminDashboardComponent,
    AdminOrdersComponent,
    HeaderComponent,
    ShoppingCartComponent,
    CustCoffeeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Kaffekunstens Forening';
}
