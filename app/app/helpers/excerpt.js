import Ember from 'ember';
import downsize from 'npm:downsize';

export function excerpt(params, {content, words, characters}) {
  var options = {};
  if (words) {
    options.words = words;
  } else if (characters) {
    options.characters = characters;
  }
  return Ember.String.htmlSafe(getExcerpt(content, options));
}

export default Ember.Helper.helper(excerpt);

function getExcerpt(html, truncateOptions) {
  truncateOptions = truncateOptions || {};
  // Strip inline and bottom footnotes
  var excerpt     = html.replace(/<a href="#fn.*?rel="footnote">.*?<\/a>/gi, '');
  excerpt         = excerpt.replace(/<div class="footnotes"><ol>.*?<\/ol><\/div>/, '');
  // Strip other html
  excerpt         = excerpt.replace(/<\/?[^>]+>/gi, '');
  excerpt         = excerpt.replace(/(\r\n|\n|\r)+/gm, ' ');
  /*jslint regexp:false */

  if (!truncateOptions.words && !truncateOptions.characters) {
    truncateOptions.words = 50;
  }

  return downsize(excerpt, truncateOptions);
}
