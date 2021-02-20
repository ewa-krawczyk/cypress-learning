describe('Create new account', () => {
    before(() => {
        cy.visit('');
    })
    it('Open page', () => {
        cy.url().should('include', 'http://seleniumdemo.com/');
    })
    it('Log in', () => {
        cy.fixture('data.json').then(item => {
            cy.get('span').contains('My account').click();
            cy.get('input[id="username"]').type(item.email);
            cy.get('input[id="password"]').type(item.password);
            cy.get('button[name="login"]').click();
            cy.get('p').should('contain.text', 'Hello');
        }) 
    })
})