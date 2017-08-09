'use strict';

function hybrid_operation_to_uneven(collection) {
  var num;
  var result = [];
  collection.forEach(function(elem){
    //let tmp;
    if(elem % 2 !== 0){
      num = elem * 3 + 2;
      result.push(num);
    }
  })
  return result;
}

module.exports = hybrid_operation_to_uneven;

