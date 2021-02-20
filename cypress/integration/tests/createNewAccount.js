describe('Create new account', () => {
    before(() => {
        cy.visit('');
    })
    it('Open page', () => {
        cy.url().should('include', 'http://seleniumdemo.com/');
    })
    it('Register as a new user', () => {
        cy.fixture('data.json').then(item => {
            cy.get('span').contains('My account').click();
            cy.get('input[id="reg_email"]').type(item.email);
            cy.get('input[id="reg_password"]').type(item.email);
            cy.get('button[name="register"]').click();
            cy.get('p').should('contain.text', 'Hello ');
        }) 
    })
})