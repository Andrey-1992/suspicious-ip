describe('Home view dashboard user flow', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/searched-ip')
  })

  it('Should confirm that true is equal to true', () => {
    expect(true).to.equal(true)
  })

  it('Searched IP view should be visible', () => {
    cy.get('.ipInfo').should('be.visible')
  })

  it('IP Form component should be visible', () => {
    cy.get('.ip-form-component').should('be.visible')
  })

  it('Searched IP view should have an card incremenetion when you hover over it', () => {
    cy.get('.ipInfo').trigger('mouseover')
  })

});