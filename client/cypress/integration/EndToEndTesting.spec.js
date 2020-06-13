/// <reference types="cypress" />

context('End to end testing', () => {
  describe('Check the flow of the app', () => {
    beforeEach(() => {
      cy.visit('');
      cy.viewport(375, 900);
    });
    it('should login as a depot worker and check for a ticket number', () => {
      cy.get('[data-cy=input]').first().type('anders');
      cy.get('[data-cy=input]').last().type('password');
      cy.get('[data-cy=bottom-button]').click();
      cy.url().should('include', '/home-depot');
      cy.get('[data-cy=button]').eq(1).click();
      cy.url().should('include', '/ticket-number');
      cy.get('[data-cy=input]').type('a4e36484-7836-4049-8cbd-837026161da7');
      cy.get('[data-cy=bottom-button]').click();
      cy.url().should(
        'include',
        '/ticket-details/a4e36484-7836-4049-8cbd-837026161da7'
      );
      cy.get('[data-cy=row-name]')
        .first()
        .invoke('text')
        .should('contain', 'TICKET NUMBER');
      cy.get('[data-cy=row-data]')
        .first()
        .invoke('text')
        .should('contain', 'a4e36484-7836-4049-8cbd-837026161da7');
      cy.get('[data-cy=row-name]')
        .eq(2)
        .invoke('text')
        .should('contain', 'TYPE');
      cy.get('[data-cy=row-data]')
        .eq(2)
        .invoke('text')
        .should('contain', 'Pick up');
      cy.get('[data-cy=row-name]')
        .eq(3)
        .invoke('text')
        .should('contain', 'DRIVERS');
      cy.get('[data-cy=row-data]')
        .eq(3)
        .invoke('text')
        .should('contain', 'Razvan');
    });
    it('should login as a warehouse worker and check for storage', () => {
      cy.get('[data-cy=input]').first().type('steven');
      cy.get('[data-cy=input]').last().type('password');
      cy.get('[data-cy=bottom-button]').click();
      cy.url().should('include', '/home-warehouse');
      cy.wait(1000);
      cy.get('[data-cy=button]').eq(2).click();
      cy.url().should('include', '/check-storage');
      cy.get('[data-cy=available-capacity]')
        .invoke('text')
        .should('contain', 'Available Capacity');
      cy.get('[data-cy=available-barels]')
        .invoke('text')
        .should('contain', 'barels');
    });
    it('should login as depot worker and create a delivery job', () => {
      cy.get('[data-cy=input]').first().type('anders');
      cy.get('[data-cy=input]').last().type('password');
      cy.get('[data-cy=bottom-button]').click();
      cy.url().should('include', '/home-depot');
      cy.wait(1000);
      cy.get('[data-cy=button]').eq(2).click();
      cy.url().should('include', '/create-job');
      cy.wait(1000);
      cy.get('[data-cy=button]').first().click();
      cy.url().should('include', '/select-company-job');
      cy.wait(1000);
      cy.get('[data-cy=button]').first().click();
      cy.url().should('include', '/select-driver');
      cy.wait(1000);
      cy.get('[data-cy=button]').last().click();
      cy.url().should('include', '/select-truck');
      cy.wait(1000);
      cy.get('[data-cy=button]').eq(2).click();
      cy.url().should('include', '/select-chemicals');
      cy.wait(1000);
      cy.get('[data-cy=input]').first().type(2);
      cy.get('[data-cy=bottom-button]').click();
      cy.url().should('include', '/finalize-job');
      cy.wait(1000);
      cy.get('[data-cy=row-name]')
        .first()
        .invoke('text')
        .should('contain', 'TICKET NUMBER');
      cy.get('[data-cy=row-name]')
        .eq(1)
        .invoke('text')
        .should('contain', 'ARRIVAL');
      cy.get('[data-cy=row-name]')
        .eq(2)
        .invoke('text')
        .should('contain', 'TYPE');
      cy.get('[data-cy=row-data]')
        .eq(2)
        .invoke('text')
        .should('contain', 'Delivery');
      cy.get('[data-cy=row-name]')
        .eq(3)
        .invoke('text')
        .should('contain', 'DRIVERS');
      cy.get('[data-cy=row-data]')
        .eq(3)
        .invoke('text')
        .should('contain', 'razvan');
      cy.get('[data-cy=row-name]')
        .eq(4)
        .invoke('text')
        .should('contain', 'TRUCK');
      cy.get('[data-cy=row-data]')
        .eq(4)
        .invoke('text')
        .should('contain', 'DK92AAH');
    });
  });
});
