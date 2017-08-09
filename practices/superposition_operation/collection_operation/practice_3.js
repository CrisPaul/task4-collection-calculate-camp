'use strict';

function hybrid_operation_to_uneven(collection) {
  var num, sum = 0;
  var result = [];
  collection.forEach(function(elem){
    if(elem % 2 !== 0){
      num = elem * 3 + 5;
      sum += num;
    }
  })
  return sum;
}

module.exports = hybrid_operation_to_uneven;

