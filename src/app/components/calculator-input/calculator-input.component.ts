// calculator-input.component.ts
import { Component } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator-input',
  templateUrl: './calculator-input.component.html',
  imports: [
    FormsModule
  ]
})
export class CalculatorInputComponent {
  num1 = 0;
  num2 = 0;
  operation = '+';

  constructor(private calculatorService: CalculatorService) {}

  calculate() {
    this.calculatorService.calculate(this.num1, this.num2, this.operation);
  }
}
