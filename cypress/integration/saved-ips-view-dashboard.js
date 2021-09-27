describe('Saved IP view dashboard user flow', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/saved-ip')
  })

  it('Should confirm that true is equal to true', () => {
    expect(true).to.equal(true)
  })

  it('Saved IP view should be visible', () => {
    cy.get('.saved-cards-container').should('be.visible')
  }) 

  it('Local IP should have an card incremenetion when you hover over it', () => {
    cy.get('.saved-cards-container').trigger('mouseover')
  })

});