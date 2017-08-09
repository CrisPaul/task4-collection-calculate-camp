'use strict';
var number_map_to_word = function(collection){
  var resCollection = [];
  function numToAlpha(elem){
    return String.fromCharCode(elem+96);
  }
  resCollection = collection.map(numToAlpha);
  return resCollection;
};

module.exports = number_map_to_word;
