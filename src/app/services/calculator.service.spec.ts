import { TestBed } from '@angular/core/testing';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should correctly add two numbers (TC-U01)', () => {
    service.calculate(3, 5, '+');
    service.result$.subscribe(result => {
      expect(result).toBe(8);
    });
  });

  it('should correctly subtract two numbers (TC-U02)', () => {
    service.calculate(10, 7, '-');
    service.result$.subscribe(result => {
      expect(result).toBe(3);
    });
  });

  it('should correctly multiply two numbers (TC-U03)', () => {
    service.calculate(4, 6, '*');
    service.result$.subscribe(result => {
      expect(result).toBe(24);
    });
  });

  it('should correctly divide two numbers (TC-U04)', () => {
    service.calculate(12, 3, '/');
    service.result$.subscribe(result => {
      expect(result).toBe(4);
    });
  });

  it('should return error when dividing by zero (TC-U05)', () => {
    service.calculate(8, 0, '/');
    service.result$.subscribe(result => {
      expect(result).toBe('Error: división por 0');
    });
  });
});
