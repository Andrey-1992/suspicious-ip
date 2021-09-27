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

// it('Should display all the favorites saved prompts', () => {
//     cy.get('.prompts-collection').should('be.visible')
//       .get('.prompt-card').should('be.visible')
// });

// it('Should display card of the favorite saved prompts', () => {
//     cy.get('.prompt-card').should('be.visible')
//       .get('p').should('be.visible')
//       .get('.delete-btn').should('be.visible')
// });

// it('Should be able to click on the website title and page updates URL and display the main view', () => {
//     cy.get('h1').click()
//     .should('have.class', 'title')
//     cy.url().should('include', 'http://localhost:3000')
// })

});