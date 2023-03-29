describe('Home page', () => {

    beforeEach(() => {
        cy.visit('/')
    })


    it('should load page success', () => {
        cy.visit('/')
        cy.get('.loading')
            .should('not.exist')
    })


    it('should view the components for search product', () => {

        cy.get('nav a[href="/"] img[alt="brand image"]')
            .should('be.visible')

        cy.get('input[name="search"]')
            .should('be.visible')
            .should('be.enabled')

        cy.get('button[type="submit"]')
            .should('be.visible')
            .should('be.enabled')

    })

})