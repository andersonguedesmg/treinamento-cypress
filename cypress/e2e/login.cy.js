describe('Testes de Login', () => {
  it('Login com Sucesso', () => {
    cy.visit('http://177.153.230.45:90/P360ESTOQUE/');
    cy.get('#usuario').type('ANDERSON');
    cy.get('#senha').type('PIRAMIDE');
    cy.contains('Entrar').click();
    cy.get('.box-modulo-msg h2', { timeout: 30000 }).should('have.text', 'Pirâmide 360 Creator e Pirâmide 360 StorePirâmide Creator e Pirâmide Store');
    cy.get('img.icon-modulos').should('have.length', 14);
  });
});
