describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.sp.senac.br')

    cy.get('.mburger').click()

    cy.get('#txtLoginNaoLogadoMob').click()
    cy.get('#login-email').type('email')
    cy.get('#login-password').type('senha')
    cy.get('#btnLoginHeader').click()
  })
})