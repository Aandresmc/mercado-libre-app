
Cypress.Commands.add('viewProductDetail', (productName) => {
    cy.searchProductByText(productName)

    cy.get('main section')
        .children('a')
        .first()
        .invoke("attr", "href")
        .then((href: any) => {
            cy.visit(href);
            const baseURL = '/items/';
            const idProduct = href?.replace(baseURL, '')
            cy.log(`id product ${idProduct}`)
            return cy.wrap(idProduct as string);
        });
})

export { }