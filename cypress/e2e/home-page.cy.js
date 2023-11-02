describe('HomePage', () => { 

it('should display an empty question list', () => {

    cy.visit('/');
    cy.getCy('questionList')
    .should('exist')
    .should('have.length', 1)
    .should('be.empty');
});

it('should add a new question', () => {

    cy.visit('/');
    cy.getCy('dropdownButton').click();
    cy.contains('Long Text').click();
    cy.getCy('questionList').should('have.length', 1);
  });

  it('should delete a question', () => {

    cy.visit('/');
    cy.getCy('dropdownButton').click();
    cy.contains('Long Text').click();
    cy.getCy('questionList').should('have.length', 1);
    cy.getCy('questionList').find('.card-title').should('contain','What is your Last Name')
    cy.get('.trash-icon').click();
    cy.getCy('questionList').find('.card-title').should('not.exist')
  });

  it('should update question title and the review', () => {
    cy.visit('/');
    cy.getCy('dropdownButton').click();
    cy.contains('Long Text').click();
    cy.getCy('questionList').find('.card-title').should('contain','What is your Last Name')
    cy.getCy('reviewTitle').should('contain','What is your Last Name')

    cy.getCy('inputForm').clear()
    cy.getCy('inputForm').type('What is your Address');

    cy.getCy('questionList').find('.card-title').should('contain','What is your Address')
    cy.getCy('reviewTitle').should('contain','What is your Address')

  });

 })