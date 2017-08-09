'use strict';

function compute_median(collection) {
  var midNum;
  function sortNumber(a,b){
    return a-b;
  }
  collection.sort(sortNumber);
  if(collection.length % 2 == 0)
  {
    var halfLen = collection.length/2;
    midNum = (collection[halfLen]+collection[halfLen-1]) /2;
    console.log(midNum);
  }else{
    midNum = collection[(collection.length - 1)/2]
    console.log(midNum);
  }
  return midNum;
}

module.exports = compute_median;


