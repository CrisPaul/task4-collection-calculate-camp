'use strict';
var number_map_to_word_over_26 = function(collection){
  var resCollection = [];
  function numToAlpha(elem){
    var size = parseInt(elem /26);
    var alphaCollection = [];
    var numOfAlpha = parseInt(elem % 26);
    if(size == 0){
      return String.fromCharCode(96+numOfAlpha);
    }else if(size !== 0 && numOfAlpha != 0){
      return String.fromCharCode(96+size)+String.fromCharCode(96+numOfAlpha);
    }else if(size != 0 && numOfAlpha == 0){
      if(size == 1){
        return 'z';
      }else{
        return String.fromCharCode(96+size-1) + 'z';
      }
    }
    return alphaCollection;
  }
  resCollection = collection.map(numToAlpha);
  return resCollection;
};

module.exports = number_map_to_word_over_26;
