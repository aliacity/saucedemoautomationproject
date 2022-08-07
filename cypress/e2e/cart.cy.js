//const { assert } = require("cypress/types/sinon")

describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').click().type('standard_user')
    cy.get('[data-test="password"]').click().type('secret_sauce').wait(100)
    cy.get('[data-test="login-button"]').click().wait(100)
    //add two items to cart
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
    cy.get('.shopping_cart_link').click().wait(1000)
    //verify user can remove an item from cart
    cy.get('[data-test="remove-sauce-labs-bike-light"]').click()
    cy.wait(2000)
    //return to inventory page
    cy.get('[data-test="continue-shopping"]').click()
    cy.wait(1000)
    //verify that continue shopping button takes you back to inventory page
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    //verify user can add one more item to cart
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
    cy.get('.shopping_cart_link').click().wait(100)
    cy.get('[data-test="checkout"]').click()
    cy.url().should('eq','https://www.saucedemo.com/checkout-step-one.html')
    let fname = (Math.random() + 1).toString(36).substring(2);
    cy.get('[data-test="firstName"]').click().type(fname)
    let lname = (Math.random() + 1).toString(36).substring(2);
    cy.get('[data-test="lastName"]').click().type(lname)
    //let pcode = ((Math.random()/2)+1);
    let pcode = Math.floor(Math.random() * 101) + 1;
    cy.get('[data-test="postalCode"]').click().type(pcode)
    cy.get('[data-test="continue"]').click().wait(2000)
    cy.get('[data-test="finish"]').click()
    cy.url().should('eq','https://www.saucedemo.com/checkout-complete.html')
    cy.get('.complete-header')
    .should('contain','THANK YOU FOR YOUR ORDER')
  })
})