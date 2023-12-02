import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoffeeModel} from "../add-coffee/coffee.model";

@Component({
  selector: 'app-coffee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coffee-list.component.html',
  styleUrl: './coffee-list.component.css',
})

export class CoffeeListComponent implements OnInit{
  @Input() coffeeList: CoffeeModel[] = [];

   ngOnInit() {
   }
}
