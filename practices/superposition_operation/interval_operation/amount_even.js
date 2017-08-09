'use strict';

function amount_even(collection) {
  var sum=0;
  collection.forEach(function(elem){
    if(elem % 2 == 0){
      sum += elem;
    }
  })
  return sum;

}

module.exports = amount_even;
