describe('Home view dashboard user flow', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should confirm that true is equal to true', () => {
    expect(true).to.equal(true)
  })

  it('Should contain a header section with a logo and nav bar', () => {
    cy.get('.header').should('be.visible')
    .get('h1').contains('Suspicious IP')
    .get('.nav').contains('Home')
  })

  it('Nav bar should be visible', () => {
    cy.get('.nav').should('be.visible')
  })

  it('Nav bar should have a hover element over each element', () => {
    cy.get('.nav').trigger('mouseover')
  })

});