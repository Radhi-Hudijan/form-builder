describe('first sample test', () => { 


    it('check the initial state of quedtion card',()=>{
        cy.visit('/');
        cy.getCy("questionList").should('have.length',1)
        cy.getCy("questionList").should('be.empty')
        
    })
 })