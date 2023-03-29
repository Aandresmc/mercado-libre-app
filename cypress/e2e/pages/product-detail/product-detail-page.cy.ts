import { IDataFixture } from '../../../fixtures/idata';

describe('Product page', () => {

  let _data!: IDataFixture;

  beforeEach(() => {
    cy.fixture('data.json').then(data => {
      _data = { ...data };
      cy.viewProductDetail(_data.searchProductName).then(idProduct => {
        cy.url().should('include', `/items/${idProduct}`)
      })
    })
  })

  it('should view components', () => {

    cy.get('main section img')
      .should('be.visible')

    cy.get('h1')
      .should('be.visible')

    cy.get('span')
      .should('contain.text', '$ ')

    cy.get('button[type="button"] span')
      .should('contain.text', 'Comprar')

    cy.get('h3')
      .should('contain.text', 'Descripcion')

    cy.get('p')
      .should('be.visible')
  })

})