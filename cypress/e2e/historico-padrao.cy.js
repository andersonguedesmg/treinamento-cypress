import hpPage from "../support/page/historico-padrao";

describe('Testes na tela de Histórico Padrão', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('#usuario').type('ANDERSON');
    cy.get('#senha').type('PIRAMIDE');
    cy.contains('Entrar').click();
    cy.get('.box-modulo-msg h2', { timeout: 30000 }).should('have.text', 'Pirâmide 360 Creator e Pirâmide 360 StorePirâmide Creator e Pirâmide Store');
    cy.get('img.icon-modulos').should('have.length', 14);
  });

  it('Inclusão com Sucesso', () => {
    hpPage.acessoTelaHP();
    hpPage.incluirHP();

    cy.get('.ui-growl-item-container').should('be.visible').find('.ui-growl-message p').should('have.text', 'Incluído com sucesso.');
  });
});
