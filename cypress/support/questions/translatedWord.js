function translatedWordIs(word, element) {
  cy.get(element)
    .should('have.text', word)
    .and('be.visible');
}

export default function translatedWordIsexport(word, element) {
  return translatedWordIs(word, element);
}
