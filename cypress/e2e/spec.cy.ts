describe('template spec', () => {
  it('renders the page', () => {
    cy.visit('/');
    cy.get('section[data-testid="qr-container"]').should('exist');
    cy.get('div[data-testid="qr-code"]').should('exist');
    cy.get('h1[data-testid="qr-title"]').should('exist');
    cy.get('p[data-testid="qr-description"]').should('exist');

    // Check accessibility
    cy.checkA11y();
  })
})