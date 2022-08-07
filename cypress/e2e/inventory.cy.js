//const { assert } = require("cypress/types/sinon")

describe('empty spec', () => {
  it('passes', () => {

    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').click().type('standard_user')
    cy.get('[data-test="password"]').click().type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    for(let x=0; x<4;x++ ){
      let selection= cy.get('[data-test="product_sort_container"]').select(x)
      cy.wait(2000)
      // if(x==2){
      //   selection.should('contain','Price(low to high)')
      //   cy.log("mi reach")
      //   cy.wait(5000)
      //   //for(j=1;j<10;j++){
      //     // let price1 = toString(cy.get(':nth-child(1) > .inventory_item_description > .pricebar > .inventory_item_price'))
      //     // let price2 = toString(cy.get(':nth-child(2) > .inventory_item_description > .pricebar > .inventory_item_price'))
      //     // expect(parseFloat(price1)).to.be.lessThan(parseFloat(price2))
      //   //}
      // }
    }
    //cy.get('[data-test="product_sort_container"]').select(2)
    //cy.get(':nth-child(1) > .inventory_item_description > .pricebar > .inventory_item_price').should('be.lt', cy.get(':nth-child(2) > .inventory_item_description > .pricebar > .inventory_item_price'))

    //cy.get('[data-test="product_sort_container"]')

  })
})