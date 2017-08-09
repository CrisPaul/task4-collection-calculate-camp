'use strict';
var map_to_three_multiples = function(collections){
  var resCollection = [];
  function triple(elem){
    return elem*3;
  }
  resCollection = collections.map(triple);
  return resCollection;
};

module.exports = map_to_three_multiples;
