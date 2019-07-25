describe('My first cypress test', () => {
  it('Navigate to google transale', () => {
    cy.visit('https://translate.google.com/?source=gtx');
  });
  it('translate word we erase and write again ', () => {
    cy.get('#source').type('Hola');
    cy.get('.clear > .jfk-button-img').click();
    cy.get('#source').type('Hola world');
  });
});
