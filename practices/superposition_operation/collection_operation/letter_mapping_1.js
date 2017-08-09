'use strict';
function num_to_letter(n){
    var  ascii = 96+n;
    var alpha = String.fromCharCode(ascii);
    return alpha;
}
function even_to_letter(collection) {
  var resCollection = [];
  var alpha_1;
  collection.forEach(function (elem) {
      if(elem % 2 == 0){
        alpha_1 = num_to_letter(elem);
        resCollection.push(alpha_1);
      }
  })
  return resCollection;
}

module.exports = even_to_letter;
