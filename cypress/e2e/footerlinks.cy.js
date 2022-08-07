describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').click().type('standard_user')
    cy.get('[data-test="password"]').click().type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('.social_twitter > a').invoke('removeAttr', 'target').click()
    cy.url().should('eq','https://twitter.com/saucelabs')
    cy.go('back').wait(1000)
    cy.get('.social_facebook > a').invoke('removeAttr', 'target').click()
    cy.url().should('eq','https://www.facebook.com/saucelabs')
    cy.go('back').wait(1000)
    cy.get('.social_linkedin > a').invoke('removeAttr', 'target').click()
    cy.url().should('eq','https://www.linkedin.com/company/sauce-labs/')
    cy.go('back').wait(1000)
    //cy.get('.social_linkedin > a').url().should('eq','')

  })
})