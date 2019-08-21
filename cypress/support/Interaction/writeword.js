function write(word, element) {
  cy.get(element).type(word);
}

export default function writeexport(word, element) {
  return write(word, element);
}
