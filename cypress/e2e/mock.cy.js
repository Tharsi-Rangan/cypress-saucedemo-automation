describe('Mocking and Stubbing Tests', () => {
  it('should stub the inventory page title text for demo purpose', () => {
    cy.intercept('GET', '**/inventory.html', (req) => {
      req.continue((res) => {
        expect(res.statusCode).to.eq(200);
      });
    }).as('inventoryPage');

    cy.visit('/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('contain', 'Products');
  });
});