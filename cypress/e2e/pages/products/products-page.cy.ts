import { IDataFixture } from '../../../fixtures/idata';

describe('Products page', () => {

    let _data!: IDataFixture;

    beforeEach(() => {
        cy.fixture('data.json').then(data => {
            _data = { ...data };
            cy.searchProductByText(_data.searchProductName)
            cy.url().should('include', `/items?search=${_data.searchProductName}`)
        })
    })

    it('should show list products with max 4 products', () => {

        cy.get('main section')
            .children('a')
            .should('be.visible')
            .should('have.lengthOf.at.most', 4);
    })


    it('should the product navigation is enabled', () => {

        cy.get('main section')
            .children('a')
            .first()
            .should('be.visible')
            // .should('contain.text', _data.searchProductName)
            .should('have.attr', 'href').and('include', '/items/')
            .then((href: any) => {
                cy.log(`link product detail, ${href}`)
                cy.visit(href)
            })
    })

})