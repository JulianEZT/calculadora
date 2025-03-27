import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculatorInputComponent } from './components/calculator-input/calculator-input.component';
import { CalculatorResultComponent } from './components/calculator-result/calculator-result.component';

@Component({
  selector: 'app-root',
  imports: [CalculatorInputComponent, CalculatorResultComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
