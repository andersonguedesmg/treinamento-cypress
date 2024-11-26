class HPPage {
  acessoTelaHP() {
    cy.visit('/contabilidade/historicopadrao');
  }

  incluirHP() {
    cy.contains('Incluir').click();
    cy.get('.loader', { timeout: 30000 }).should('not.exist');
    cy.get('#codigo').type('AG01');
    cy.get('#historico').type('AG01');
    cy.contains('Salvar').click();
  }
}

export default new HPPage();
