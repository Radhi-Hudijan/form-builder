describe('ReviewSection', () => {
    it('should display a review section only if there is a question', () => {

      cy.visit('/');
      cy.get('.review').should('not.exist');

      cy.getCy('dropdownButton').click();
      cy.contains('Long Text').click();
      cy.get('.review').should('exist');
    });
  });