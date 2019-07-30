import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
const url = 'https://translate.google.com/?source=gtx';

Given(`I open Google translate`, () => {
  cy.visit(url);
});
When(`I write {string} and clean text after write again`, word => {
  cy.get('#source').type(word);
  cy.get('.clear > .jfk-button-img').click();
  cy.get('#source').type(word);
});

Then(`I see {string} in the translation box`, word => {
  cy.get('.tlid-translation > span')
    .should('have.text', word)
    .and('be.visible');
});
