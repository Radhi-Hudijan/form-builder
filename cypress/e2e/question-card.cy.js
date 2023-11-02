describe('QuestionCard', () => { 
    
    it('should display a question card', () => {
        cy.visit('/');
        cy.getCy('dropdownButton').click();
        cy.contains('Long Text').click();
        cy.get('.card').should('exist');
      });
    
      it('should delete a question card', () => {
        cy.visit('/');
        cy.getCy('dropdownButton').click();
        cy.contains('Long Text').click();
        cy.get('.card').should('exist');
        cy.get('.trash-icon').click();
        cy.get('.card').should('not.exist');
      });

 })