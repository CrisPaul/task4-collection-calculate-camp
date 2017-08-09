'use strict';
function one_add_next_multiply_three(collection){
  var result = [];
  collection.forEach(function(elem,key,arr){
    if(key != collection.length-1){
      result.push( 3*(arr[key]+arr[key+1]));
    }
  })
  return result;
}
module.exports = one_add_next_multiply_three;
