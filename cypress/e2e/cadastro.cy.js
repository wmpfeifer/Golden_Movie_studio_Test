// Esse comando é usado para que sempre que eu digitar "cy." ele traga sempre os métodos e funções do
// Cypress, isso ajuda muito na hora de programar, pois não preciso ficar olhando a documentação

///(reference types="cypress" />

describe('Funcionalidade Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('Deve fazer o cadastro de campos obrigatórios', () => {
    var email = `Willian${Date.now()}@teste.com`
    cy.preencherCadastro('Willian', 'Alves', email, '49999652092', '#TesteDigi123')
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso')
      })

    it.only('deve validar o cadastro em campos obrigatórios', () => {
        cy.preencherCadastro('Willian20', 'Alves', 'Teste@willian.com', '49999652092', '#TesteDigi123')
        cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos, acentuados e espaços')
      });
})
