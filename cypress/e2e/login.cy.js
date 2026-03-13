describe('Login Tests', () => {
  it('should login successfully with valid credentials', () => {
    cy.login();

    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('contain', 'Products');
  });

  it('should show an error for invalid login', () => {
    cy.login('locked_out_user', 'wrong_password');

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Username and password do not match');
  });
});