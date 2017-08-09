'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  var resCollection = new Array();
  function arrayFill(a,b){
    var objArray = [],Array = [],elem = a;
    for(var i=0; i<=(b-a); i++){
      objArray[i] = elem;
      elem++;
    }
    Array=objArray.filter(function(x){
      return x%2 === 0;
    });
    return Array;
  }
  if(number_a < number_b){
    resCollection = arrayFill(number_a,number_b);
  }else if(number_a > number_b){
    resCollection = arrayFill(number_b,number_a);
    resCollection.reverse();
  }else if(number_a == number_b && number_a%2 == 0){
    resCollection.push(number_a);
  }
  return resCollection;
}

module.exports = get_integer_interval_2;
