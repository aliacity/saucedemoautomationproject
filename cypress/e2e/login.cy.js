describe('empty spec', () => {
  it('passes', () => {
    const usernames=['standard_user','locked_out_user','problem_user','performance_glitch_user']

    cy.visit('https://www.saucedemo.com')
    for (let i = 0; i < usernames.length; i++) {
     cy.get('[data-test="username"]').click().type(usernames[i])
     if(usernames[i]=='locked_out_user'){
      cy.get('[data-test="password"]').click().type('secret_sauce')
      cy.get('[data-test="login-button"]').click().wait(3000)
      cy.get('[data-test="error"]').should('include.text','Sorry, this user has been locked out')
      cy.get('[data-test="username"]').clear()
      cy.get('[data-test="password"]').clear()
      //cy.go('back')

     }else if(usernames[i]=='problem_user'){
        cy.get('[data-test="password"]').click().type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.wait(3000)
        //aserty that page contains the same products
        cy.go('back')
      }else{
        cy.get('[data-test="password"]').click().type('secret_sauce')
        cy.get('[data-test="login-button"]').click().wait(3000)
        cy.go('back')
        cy.get('[data-test="username"]').clear()
        cy.get('[data-test="password"]').clear()
        //cy.go('back')
      }

    }
    cy.get('[data-test="username"]').click().type('standard_user')
    cy.get('[data-test="password"]').click().type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    
    //uncomment line below to select a random user to login
    //cy.get('[data-test="username"]').click().type(usernames[Math.floor(Math.random() * usernames.length)])
    //cy.get('[data-test="username"]').click().type('standard_user')
    //cy.get('[data-test="password"]').click().type('secret_sauce')
    //cy.get('[data-test="login-button"]').click()
  
  })

})

