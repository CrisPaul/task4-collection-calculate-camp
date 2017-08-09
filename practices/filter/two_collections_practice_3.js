'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  var resCollection = new Array();
  resCollection = collection_a.filter(function(elem){
    return elem%collection_b[0] == 0 || elem%collection_b[1] == 0 || elem%collection_b[2] == 0;
  })
  return resCollection;
}

module.exports = choose_divisible_integer;
