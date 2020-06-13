/// <reference types="cypress" />

context('Unit testing', () => {
  beforeEach(() => {
    cy.visit('');
    cy.viewport(375, 900);
  });
  describe('Button, Input, Container', () => {
    it('should check the button', () => {
      cy.get('[data-cy=bottom-button]')
        .first()
        .should('have.css', 'background-color', 'rgb(108, 73, 184)');
      cy.get('[data-cy=bottom-button]')
        .first()
        .should('have.css', 'color', 'rgb(255, 255, 255)');
      cy.get('[data-cy=bottom-button]').first().should('have.css', 'width');
      cy.get('[data-cy=bottom-button]').first().should('have.css', 'height');
      cy.get('[data-cy=bottom-button]').first().should('be.visible');
    });
    it('should check the input', () => {
      cy.get('[data-cy=input]').first().should('have.css', 'width');
      cy.get('[data-cy=input]').first().should('have.css', 'height');
      cy.get('[data-cy=input]').first().should('have.css', 'color');
      cy.get('[data-cy=input]').first().should('be.visible');
    });
    it('should check the container', () => {
      cy.get('[data-cy=container]').should(
        'have.css',
        'background-color',
        'rgb(108, 73, 184)'
      );
      cy.get('[data-cy=container]').should('have.css', 'height');
      cy.get('[data-cy=container]').should('have.css', 'width');
      cy.get('[data-cy=container]').should('be.visible');
    });
  });
});
