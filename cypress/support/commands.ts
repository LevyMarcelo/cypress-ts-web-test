/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    login(username, password): Chainable<string>
  }
}

Cypress.Commands.add('login', (username, password) => {
  cy.visit('/') 
  cy.get('[data-test="username"]').type(username)
  cy.get('[data-test="password"]').type(password)
  cy.get('[data-test="login-button"]').click()
})
