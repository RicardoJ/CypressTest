function click(element) {
  cy.get(element).click();
}

export default function clickexport(element) {
  return click(element);
}
