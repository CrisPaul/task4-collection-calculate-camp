'use strict';
function map_to_even(collection){
  var resCollection = [];
  function double(elem){
    return elem*2;
  }
  resCollection = collection.map(double);
  return resCollection;
}
module.exports = map_to_even;
