'use strict';

function compute_average(collection) {
  var resCollection = new Array();
  var sum = collection .reduce(function(x,y){
    return x+y;
  })
  resCollection = sum/collection.length;
  return resCollection;
}

module.exports = compute_average;

