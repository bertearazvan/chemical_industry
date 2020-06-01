/// <reference types="cypress" />

context('Integration testing', () => {
  beforeEach(() => {
    cy.visit('');
    cy.viewport(375, 900);
  });
  describe('Integration of different components', () => {
    it('should check if the login has two inputs and a button', () => {
      cy.get('[data-cy=container]>div>div')
        .children('[data-cy=input]')
        .should('have.length', 2);
      cy.get('[data-cy=container]>div>div>div>div')
        .children('[data-cy=bottom-button]')
        .should('have.length', 1);
    });
    it('should check if the home page for depot worker has 5 buttons', () => {
      cy.get('[data-cy=input]').first().type('anders');
      cy.get('[data-cy=input]').last().type('password');
      cy.get('[data-cy=bottom-button]').click();
      cy.wait(1000);
      cy.get('[data-cy=container]>div>div')
        .children('[data-cy=button]')
        .should('have.length', 5);
    });
    it('should check if the home page for warehouse worker has 3 buttons', () => {
      cy.get('[data-cy=input]').first().type('steven');
      cy.get('[data-cy=input]').last().type('password');
      cy.get('[data-cy=bottom-button]').click();
      cy.wait(1000);
      cy.get('[data-cy=container]>div>div')
        .children('[data-cy=button]')
        .should('have.length', 3);
    });
  });
});
