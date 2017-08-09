'use strict';

function num_to_letter(n){
  var  ascii = 96+n;
  var alpha = String.fromCharCode(ascii);
  return alpha;
}
function average_to_letter(collection) {
  var resCollection = [], sum = 0;
  var alpha_1;
  collection.forEach(function (elem) {
      sum += elem;
  })
  //alpha_1 = num_to_letter(parseInt(sum/collection.length)+1);
  alpha_1 = num_to_letter(Math.ceil(sum/collection.length));
  return alpha_1;
}

module.exports = average_to_letter;

