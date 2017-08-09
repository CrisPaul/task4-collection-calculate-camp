'use strict';

function choose_multiples_of_three(collection) {
  var resCollection = [];
  resCollection = collection.filter(function (elem) {
      return elem % 3 == 0;
  })
  return resCollection;
}

module.exports = choose_multiples_of_three;
