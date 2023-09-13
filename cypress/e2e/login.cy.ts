/// <reference types="Cypress" />

describe('Login', () => {

    it('Login successfully', () => {
      cy.login('standard_user', 'secret_sauce')
      cy.get('.title').should('have.text', 'Products')
      cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    })
  })
  