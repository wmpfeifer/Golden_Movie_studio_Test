///reference types="cypress" />

describe('US-00 : Funcionalidade Busca de filmes', () => {

    beforeEach(() => {
        cy.visit('/')
    });

    it('Deve buscar um filme', () => {
        cy.get('#search-input').type('Harry Potter')
        cy.get('#search-button').click()
    });

    it('Deve validar a busca de um filme', () => {
        cy.get('#search-input').type('Harry Potter')
        cy.get('#search-button').click()
        cy.get('#results-section').should('contain', 'Harry Potter')
    });
    it('Deve buscar filmes com sucesso de uma lista', () => {
        cy.fixture('filmes').then((filmes) => {
            cy.get('#search-input').type(filmes[1].titulo)
            cy.get('#search-button').click()
            cy.get('#results-section').should('contain', filmes[1].titulo)
        })
        });
    it.only('Deve buscar filmes com sucesso de uma lista inteira', () => {
        cy.fixture('filmes').each((filmes) => {
            cy.get('#search-input').clear().type(filmes.titulo)
            cy.get('#search-button').click({force: true})
            cy.get('#results-section').should('contain', filmes.titulo)
        })
        });


});
