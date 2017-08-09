'use strict';

function find_first_even(collection) {
  var res;
  for(var i=0; i<collection.length; i++){
    if(collection[i]%2 == 0){
      res = collection[i];
      break;
    }
  }
  return res;
}

module.exports = find_first_even;

