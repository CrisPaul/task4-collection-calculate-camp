'use strict';
var calculate_median = function(collection){
    var collection_1 = [], collection_2 = [],tmp = [];
    var mid;
    collection.forEach(function (elem) {
      if(elem % 2 == 0){
        tmp.push(elem);
      }
    })
    if(tmp.length %2 == 0){
      mid = (tmp[tmp.length/2]+tmp[tmp.length/2-1])/2;
    }else{
      mid = tmp[(tmp.length-1)/2];
    }
    return mid;
};
module.exports = calculate_median;
