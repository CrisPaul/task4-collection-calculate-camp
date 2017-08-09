'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var resCollection = new Array();
  function arrayFill(a,b){
    var objArray = [],elem = 97 + a - 1;
    for(var i=0; i <= b-a; i++){
      objArray[i] =String.fromCharCode(elem);
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
    resCollection.push(String.fromCharCode(number_a+96));
  }
  return resCollection;
}

module.exports = get_letter_interval;
