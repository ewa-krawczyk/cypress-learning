describe('Update Addresses', () => {
    context ('When page initially loaded', () => {   
        before('Log in', () => {
            cy.fixture('data.json').then(item => {
                cy.visit('');
                cy.get('span').contains('My account').click();
                cy.get('input[id="username"]').type(item.email);
                cy.get('input[id="password"]').type(item.password);
                cy.get('button[name="login"]').click();
                cy.get('p').should('contain.text', 'From your account dashboard you can view your');
            }) 
        })
        it('Update address', ()=> {
            cy.fixture('data.json').then(item => {
                cy.get('a').contains('Addresses').click();
                cy.get('p').should('contain.text', 'The following addresses will be used on the checkout page by default.');
                cy.get('a').contains('Edit').click();
                cy.get('input[id="billing_first_name"]').clear();
                cy.get('input[id="billing_first_name"]').type(item.firstName);
                cy.get('input[id="billing_last_name"]').clear();
                cy.get('input[id="billing_last_name"]').type(item.lastName);
                cy.get('span[id="select2-billing_country-container"]').click();
                cy.get('input[class="select2-search__field"]').type(item.country);
                cy.get('li').contains(item.country).click();
                cy.get('input[id="billing_address_1"]').clear();
                cy.get('input[id="billing_address_1"]').type(item.address);
                cy.get('input[id="billing_postcode"]').clear();
                cy.get('input[id="billing_postcode"]').type(item.postcode);
                cy.get('input[id="billing_city"]').clear();
                cy.get('input[id="billing_city"]').type(item.town);
                cy.get('input[id="billing_phone"]').clear();
                cy.get('input[id="billing_phone"]').type(item.phone);
                cy.get('button').contains('Save address').click();
                cy.get('div').should('contain.text', 'Address changed successfully.	');
            })
        })
    })
})