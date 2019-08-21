import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import transletdWordIs from '../questions/translatedWord.js';
import translateword from '../tasks/translate.js';
const url = 'https://translate.google.com/?source=gtx';

Given(`I open Google translate`, () => {
  cy.visit(url);
});
When(`I write {string} and clean text after write again`, word => {
  translateword(word);
});

Then(`I see {string} in the translation box`, word => {
  transletdWordIs(word, '.tlid-translation > span');
});
