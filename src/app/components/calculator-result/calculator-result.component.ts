// calculator-result.component.ts
import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';

@Component({
  selector: 'app-calculator-result',
  templateUrl: './calculator-result.component.html',
})
export class CalculatorResultComponent implements OnInit {
  result: number | string = '';

  constructor(private calculatorService: CalculatorService) {}

  ngOnInit(): void {
    this.calculatorService.result$.subscribe(res => {
      this.result = res;
    });
  }
}
