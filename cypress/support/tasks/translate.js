import write from '../Interaction/writeword.js';
import click from '../Interaction/clickInElement.js';
function translateword(word) {
  write(word, '#source');
  click('.clear > .jfk-button-img');
  write(word, '#source');
}

export default function translatewordexport(word) {
  return translateword(word);
}
