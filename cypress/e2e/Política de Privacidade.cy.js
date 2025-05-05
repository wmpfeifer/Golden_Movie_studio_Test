describe('Funcionalidade Política de Privacidade', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    afterEach(() => {
        cy.screenshot()
    });
    it('Deve validar a política de privacidade', () => {
        cy.contains('a', 'Política de Privacidade').click();
        Cypress.on('uncaught:exception', (err, runnable) => {
        // Retorna false para evitar que o Cypress falhe no teste
        return false;
        });

        //Rola até o final da página e verifica se o ultimo parágrafo está visível
       cy.scrollTo('bottom');
       cy.get(':nth-child(7) > p').should('be.visible')

    })

})
