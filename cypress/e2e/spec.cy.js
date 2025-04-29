// Esse comando é usado para que sempre que eu digitar "cy." ele traga sempre os métodos e funções do
// Cypress, isso ajuda muito na hora de programar, pois não preciso ficar olhando a documentação

///(reference types="cypress" />

describe('Funcionalidade Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Digifred')
    cy.get('#signup-lastname').type('Sistemas')
    cy.get('#signup-email').type('Digifred123@gmail.com')
    cy.get('#signup-phone').type('4999999999')
    cy.get('#signup-password').type('#2025Digifred')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso')


  })
})
