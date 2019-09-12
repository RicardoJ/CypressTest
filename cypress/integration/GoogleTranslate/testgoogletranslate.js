import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const url = 'https://translate.google.com/?source=gtx';

Given('I opened Google translate', () => {
  cy.visit(url);

});
When('I write {string}', word => {
  //agregar con el enfoque del post
  console.log(word);
  
});

Then('I see {string} in the translation box', word => {
  console.log(word);
});
