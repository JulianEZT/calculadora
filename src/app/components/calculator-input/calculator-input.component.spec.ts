import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculatorInputComponent } from './calculator-input.component';
import { CalculatorService } from '../../services/calculator.service';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';

describe('CalculatorInputComponent (Standalone - Integración)', () => {
  let component: CalculatorInputComponent;
  let fixture: ComponentFixture<CalculatorInputComponent>;
  let calculatorService: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CalculatorInputComponent, FormsModule],
      providers: [CalculatorService],
    });

    fixture = TestBed.createComponent(CalculatorInputComponent);
    component = fixture.componentInstance;
    calculatorService = TestBed.inject(CalculatorService);
    fixture.detectChanges();
  });

  it('TC-I01: Debe actualizar el resultado al cambiar los inputs y calcular', (done) => {
    component.num1 = 2;
    component.num2 = 2;
    component.operation = '+';
    component.calculate();

    calculatorService.result$.subscribe(result => {
      expect(result).toBe(4);
      done();
    });
  });

  it('TC-I02: Debe cambiar la operación y dar el resultado correspondiente', (done) => {
    component.num1 = 5;
    component.num2 = 5;
    component.operation = '*';
    component.calculate();

    calculatorService.result$.subscribe(result => {
      expect(result).toBe(25);
      done();
    });
  });

  it('TC-I04: Debe manejar una operación inválida correctamente', (done) => {
    component.num1 = 9;
    component.num2 = 2;
    component.operation = '%'; // no soportada
    component.calculate();

    calculatorService.result$.subscribe(result => {
      expect(result).toBe('Operación inválida');
      done();
    });
  });
});
