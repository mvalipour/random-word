'use strict';
var uniqueRandomArray = require('unique-random-array');
var words = require('word-list-fa').getWords();

// group words by length
var groups = {};
words.forEach(function (w) {
  (groups[w.length] || (groups[w.length] = [])).push(w);
});
var allLengths = Object.keys(groups).map(function(k){ return +k; });

// select a random array in length-groups
// that is of length lte the given length
// .
function randWordsForLength(length) {
  if(typeof length !== 'number') {
    return;
  }

  var lengthsToSelectFrom = allLengths.filter(function(e) { return e <= length; });
  var rand = uniqueRandomArray(lengthsToSelectFrom);
  return groups[rand()];
}

module.exports = function (l) {
  var arr = randWordsForLength(l) || words;
  return uniqueRandomArray(arr)();
};
