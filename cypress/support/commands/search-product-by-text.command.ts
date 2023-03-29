
Cypress.Commands.add('searchProductByText', (productName) => {
    cy.visit('/')

    cy.get('input[name="search"]').type(productName);
    cy.get('form').submit();

})

export { }