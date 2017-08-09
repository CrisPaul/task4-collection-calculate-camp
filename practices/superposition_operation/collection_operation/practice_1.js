'use strict';

function hybrid_operation(collection) {
    var tmp;
    var sum = 0;
    collection.forEach(function(elem){
        tmp = elem * 3 + 2;
        sum += tmp;
    })
  return sum;
}

module.exports = hybrid_operation;

