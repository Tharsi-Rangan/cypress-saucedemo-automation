describe('Cart Tests', () => {

  beforeEach(() => {
    cy.login();
  });

  it('should add product to cart', () => {

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    cy.get('.shopping_cart_badge')
      .should('be.visible')
      .and('contain', '1');
  });

  it('should verify product inside cart', () => {

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    cy.get('.shopping_cart_link').click();

    cy.get('.inventory_item_name')
      .should('contain', 'Sauce Labs Backpack');
  });

});