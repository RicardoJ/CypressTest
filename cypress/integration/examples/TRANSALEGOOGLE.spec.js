describe('My first cypress test', () => {
  it('Navigate to google transale', () => {
    cy.visit('https://translate.google.com/?source=gtx');
  });
});
