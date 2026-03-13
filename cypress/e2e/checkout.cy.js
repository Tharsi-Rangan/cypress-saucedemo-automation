describe('Checkout Tests using Fixture Data', () => {

  beforeEach(() => {
    cy.login();
  });

  it('should complete checkout using fixture data', () => {

    cy.fixture('checkoutData').then((data) => {

      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

      cy.get('.shopping_cart_link').click();

      cy.get('[data-test="checkout"]').click();

      cy.get('[data-test="firstName"]').type(data.firstName);
      cy.get('[data-test="lastName"]').type(data.lastName);
      cy.get('[data-test="postalCode"]').type(data.postalCode);

      cy.get('[data-test="continue"]').click();

      cy.get('.summary_info')
        .should('be.visible');

    });

  });

});