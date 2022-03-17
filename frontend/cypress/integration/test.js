// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My First Cypress Test', () => {
  it('Visits our wicked page, and do some things', () => {
  //Visit the Demo QA Website
  cy.visit("http://localhost:4567/");
  
  cy.get('.button').should('be.visible')
  cy.get('.button').contains('Click me please')
  cy.get('.navMenu > a').should('have.length', 5)
  

})
})