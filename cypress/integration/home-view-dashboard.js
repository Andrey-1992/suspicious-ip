describe('Home view dashboard user flow', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should confirm that true is equal to true', () => {
    expect(true).to.equal(true)
  })

  it('Home view should be visible', () => {
    cy.get('.home-view').should('be.visible')
    .get('.home-header').contains('Welcome !')
  })

  it('App introduction and instructions must be displayed', () => {
    cy.get('.about-text').should('be.visible')
  })

  it('Should mention the API used fot this project', () => {
    cy.get('.about-text').contains('ipapi')
  })

  it('Home view should have an card incremenetion when you hover over it', () => {
    cy.get('.home-view').trigger('mouseover')
  })

});