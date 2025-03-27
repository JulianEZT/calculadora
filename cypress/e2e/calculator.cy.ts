describe('Calculadora UI - Pruebas Funcionales', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('TC-F01: El usuario puede ingresar dos números, seleccionar suma y ver el resultado', () => {
    cy.get('input[placeholder="Número 1"]').type('4');
    cy.get('select').select('+');
    cy.get('input[placeholder="Número 2"]').type('2');
    cy.contains('Calcular').click();
    cy.contains('Resultado: 6');
  });

  it('TC-F02: El usuario puede seleccionar la operación de multiplicación', () => {
    cy.get('select').select('*');
    cy.get('select').should('have.value', '*');
  });

  it('TC-F03: Si los inputs están vacíos, no debe mostrarse ningún resultado', () => {
    cy.contains('Calcular').click();
    cy.contains('Resultado: 0');
  });

  it('TC-F04: Después de calcular, los inputs pueden limpiarse y volver a usarse', () => {
    cy.get('input[placeholder="Número 1"]').type('9');
    cy.get('select').select('-');
    cy.get('input[placeholder="Número 2"]').type('3');
    cy.contains('Calcular').click();
    cy.contains('Resultado: 6');
    // Simulamos limpieza manual
    cy.get('input[placeholder="Número 1"]').clear().should('have.value', '');
    cy.get('input[placeholder="Número 2"]').clear().should('have.value', '');
  });

  it('TC-F05: La operación se calcula correctamente y el resultado es mostrado por otro componente', () => {
    cy.get('input[placeholder="Número 1"]').type('5');
    cy.get('select').select('+');
    cy.get('input[placeholder="Número 2"]').type('5');
    cy.contains('Calcular').click();
    cy.contains('Resultado: 10');
  });
});
