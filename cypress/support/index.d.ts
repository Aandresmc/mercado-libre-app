/// <reference types="cypress" />


declare namespace Cypress {
    interface Chainable {
        /**
         * Custom command to search product by name.
         * @example cy.searchProduct('car')
         */
        searchProductByText(productName: string): Chainable<Element>;
        /**
         * Custom command to view detail.
         * @example cy.viewProductDetail('car')
         */
        viewProductDetail(productName: string): Chainable<Element>;
    }
}