import { IDataFixture } from '../../fixtures/idata';

describe('Feature Search Product', () => {

  let _data!: IDataFixture;

  beforeEach(() => {
    cy.visit('/')
    cy.fixture('data.json').then(data => {
      _data = { ...data };
    })
  })


  it('should search products by name and result success', () => {
    const { searchProductName } = _data;

    cy.intercept('GET', `**search?q=${searchProductName}&limit=4**`).as('getProducts')

    cy.log(`There are ${searchProductName} product name.`)

    cy.get('input[name="search"]').type(searchProductName);

    cy.get('form').submit();

    cy.url().should('include', `/items?search=${searchProductName}`)

    cy.wait('@getProducts').then(({ request, response }) => {

      expect(request.url).to.contains(`/search?q=${searchProductName}`)
      expect(request.query.limit).to.equal('4')
      expect(request.method).to.equal('GET')
      expect(response?.statusCode).to.equal(200)
    })
  })
})