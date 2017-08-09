'use strict';

function find_last_even(collection) {
  var res;
  for(var i=collection.length-1; i >= 0; i--){
    if(collection[i]%2 == 0){
      res = collection[i];
      break;
    }
  }
  return res;
}

module.exports = find_last_even;
