import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CoffeeService } from '../models/coffee.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  coffeeForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    cost: new FormControl('', [Validators.required]),
    available: new FormControl(false, []),
  });

  constructor(private coffeeService: CoffeeService) {}

  ngOnInit() {}

  onFormSubmit() {
    if (!this.coffeeForm.valid) return;
    this.coffeeService.addCoffee(
      this.coffeeForm.get('name')?.value,
      this.coffeeForm.get('cost')?.value,
      this.coffeeForm.get('available')?.value
    );
    this.coffeeForm.reset();
  }
}
