'use strict';
var calculate_average = function(collection){
    var res , sum = 0, count = 0;
    collection.forEach(function (elem) {
      if(elem % 2 == 0){
        sum += elem;
        count ++;
      }
    })
  return parseInt(sum/count);
};
module.exports = calculate_average;
