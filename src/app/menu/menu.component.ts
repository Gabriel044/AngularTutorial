import { Component, OnInit } from '@angular/core';
import { Coffee } from '../models/coffee.model';
import { CoffeeService } from '../models/coffee.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  menu!: Coffee[];
  constructor(private coffeeService: CoffeeService) {}

  ngOnInit() {
    this.menu = this.coffeeService.getCoffees();
  }
}
