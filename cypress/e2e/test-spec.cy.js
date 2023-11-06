describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('Button Test', () => {
  it('Clicks the button and starts the game', () => {
    // sidan där din knapp finns
    cy.visit('/index.html');

    // Klicka på knappen med hjälp av dess CSS-klass
    cy.get('.btn.btn-warning').click();

  });
});
