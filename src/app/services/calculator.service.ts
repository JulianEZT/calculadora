// calculator.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  private resultSubject = new BehaviorSubject<number | string>('');
  result$ = this.resultSubject.asObservable();

  calculate(num1: number, num2: number, operation: string) {
    let result: number | string;
    switch (operation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num2 !== 0 ? num1 / num2 : 'Error: división por 0';
        break;
      default:
        result = 'Operación inválida';
    }
    this.resultSubject.next(result);
  }
}
