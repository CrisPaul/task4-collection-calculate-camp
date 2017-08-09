'use strict';
var map_to_four_multiples_add_one = function(collection){
  var resCollection = [];
  function fourMultiplesAdd0ne(elem){
    return elem*4+1;
  }
  resCollection = collection.map(fourMultiplesAdd0ne);
  return resCollection;
};

module.exports = map_to_four_multiples_add_one;
