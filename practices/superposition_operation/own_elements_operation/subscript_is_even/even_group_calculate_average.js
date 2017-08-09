'use strict';
function averageNum(array, n) {
  var sum = 0,avg;
  if(n != 0){
    array.forEach(function (t) {
      sum += t;
    })
    avg = parseInt(sum/n);
    return avg;
  }else{
    return -1;
  }
}
var even_group_calculate_average = function(collection){
  var result = [], unit, decade, hundreds;
  var array_one = [],array_double = [], array_triple = [],tmp_collection = [];
  collection.forEach(function(obj,index,arr){
    if(index%2 != 0 && obj%2 == 0){
      tmp_collection.push(obj);
    }
  })
  if(tmp_collection.length == 0){
    result.push(0);
    return result;
  }
  tmp_collection.forEach(function (elem) {
    hundreds = parseInt(elem/100);  //百位
    decade = (parseInt(elem/10))%10;  //10
    unit = (elem%100)%10;   //个
    if(hundreds){
      array_triple.push(elem);
    }else if(decade){
      array_double.push(elem);
    }else{
      array_one.push(elem);
    }
  })
  var a1=averageNum(array_one,array_one.length);
  var a2=averageNum(array_double,array_double.length);
  var a3=averageNum(array_triple,array_triple.length);

  if(a1>=0)result.push(a1);
  if(a2>=0)result.push(a2);
  if(a3>=0)result.push(a3);
  return result;
};
module.exports = even_group_calculate_average;
