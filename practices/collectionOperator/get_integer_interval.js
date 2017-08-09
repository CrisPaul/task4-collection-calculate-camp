'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  var resCollection = [];
  function arrayFill(a,b){
    var objArray = [],elem = a;
    for(var i=0; i<=(b-a); i++){
      objArray[i] = elem;
      elem++;
    }
    return objArray;
  }
  if(number_a < number_b){
    resCollection = arrayFill(number_a,number_b);
  }else if(number_a > number_b){
    resCollection = arrayFill(number_b,number_a);
    resCollection.reverse();
  }else{
    resCollection.push(number_a);
  }
  return resCollection;
}

module.exports = get_integer_interval;

