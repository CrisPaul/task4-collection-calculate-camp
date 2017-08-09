'use strict';

function compute_chain_median(collection) {
  var midNum;
  var sym = /->/g;
  function sortNumber(a,b){
    return a-b;
  }
  var array = collection.replace(sym,',').split(',');
  var halfLen =array.length/2;
  for(var i=0;i< array.length;i++){
    array[i] = parseInt(array[i]);
  }
  array.sort(sortNumber);
  if(array.length % 2 == 0){
    midNum = (array[halfLen] + array[halfLen-1]) /2;
  }else{
    midNum = array[(array.length - 1)/2];
  }
  return midNum;
}

module.exports = compute_chain_median;
