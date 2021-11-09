import { Injectable } from '@angular/core';
import { Coffee } from './coffee.model';

@Injectable({ providedIn: 'root' })
export class CoffeeService {
  private cafes: Coffee[] = [];
  constructor() {}

  addCoffee(name: string, cost: number, available: boolean) {
    this.cafes.push({
      name: name,
      cost: cost,
      available: available,
    });
  }

  getCoffees() {
    return [...this.cafes];
  }
}
