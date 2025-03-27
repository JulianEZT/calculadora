import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculatorResultComponent } from './calculator-result.component';
import { CalculatorService } from '../../services/calculator.service';

describe('CalculatorResultComponent (Standalone - Integración)', () => {
  let component: CalculatorResultComponent;
  let fixture: ComponentFixture<CalculatorResultComponent>;
  let calculatorService: CalculatorService;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [CalculatorResultComponent],
      providers: [CalculatorService],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatorResultComponent);
    component = fixture.componentInstance;
    calculatorService = TestBed.inject(CalculatorService);
    fixture.detectChanges();
  });

  it('TC-I03: Debe mostrar el resultado proveniente del servicio', (done) => {
    calculatorService.calculate(8, 3, '-');

    setTimeout(() => {
      fixture.detectChanges(); // Ahora sí actualiza el DOM después de emitir
      const p = fixture.nativeElement.querySelector('div');
      expect(p?.textContent).toContain('5');
      done();
    }, 0);
  });


  it('TC-I05: El servicio debe calcular correctamente al usarse desde cualquier componente', (done) => {
    calculatorService.calculate(9, 3, '/');

    calculatorService.result$.subscribe(result => {
      expect(result).toBe(3);
      done();
    });
  });
});
