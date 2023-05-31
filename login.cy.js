describe('saucedemo', () => {
  it('passes', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-brand-banner > img').should('be.visible')
  })
  it('failed', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get('input[name="password"]').type('admin')
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert-content > .oxd-text').should('be.visible')
    
  })
})

