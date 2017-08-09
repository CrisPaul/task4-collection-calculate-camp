'use strict';

function spilt_to_zero(number, interval) {
  var flag = (number*10)%(interval*10);
  var res = new Array();
  if(flag == 0){

    for(var i=number;i!=0;){
      res.push[i];
      i = i-interval;
    }
    res.push(0);
  }else{
    //unlimit split under zero
    var j;
    for(j=number;j>0;){
      res.push[j];
      j = j-interval;
    }
    res.push(j);
  }
  return res;
}

module.exports = spilt_to_zero;
