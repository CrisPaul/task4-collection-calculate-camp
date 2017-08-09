'use strict';

function average_uneven(collection) {
  var sum=0,avg;
  var count = 0;
  collection.forEach(function(elem){
    if(elem % 2 !== 0){
      sum += elem;
      count ++;
    }
  })
  avg = parseInt(sum/count);
  return avg;
}

module.exports = average_uneven;
