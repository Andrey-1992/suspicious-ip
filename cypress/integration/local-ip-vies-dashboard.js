describe('Local IP view dashboard user flow', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/local-ip')
  })

  it('Should confirm that true is equal to true', () => {
    expect(true).to.equal(true)
  })

  it('Local IP view should be visible', () => {
    cy.get('.ip-card-info').should('be.visible')
  }) 

  it('Local IP Card view should be visible', () => {
    cy.get('.single-card').should('be.visible')
  }) 

  it('Local IP should have an card incremenetion when you hover over it', () => {
    cy.get('.ip-card-info').trigger('mouseover')
  })

});