'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  //第1个是a，第20个是t，第53个是ba
  var resCollection = new Array();
  var numCollection = [], alphaCollection = [];
  var size, numOfAlpha;
  function choiceAlphaRange(begin, end){
    for(var i=0;i<=end-begin;i++){
      //numCollection[i] = 96+i;
      size = parseInt((begin+i)/26);
      numOfAlpha = parseInt((begin+i)%26);
      if(size == 0){
        alphaCollection.push(String.fromCharCode(96+numOfAlpha));
      }else if(size !== 0 && numOfAlpha != 0){
        alphaCollection.push(String.fromCharCode(96+size)+String.fromCharCode(96+numOfAlpha));
      }else if(size != 0 && numOfAlpha == 0){
        if(size == 1){
          alphaCollection.push('z');
        }else{
          alphaCollection.push(String.fromCharCode(96+size-1)+'z');
        }
      }
    }
    return alphaCollection;
  }
  if(number_a < number_b){
    resCollection = choiceAlphaRange(number_a,number_b);
  }else if(number_a > number_b){
    resCollection = choiceAlphaRange(number_b,number_a);
    resCollection.reverse();
  }else{
    var size1 = parseInt(number_a / 26);
    var numOfAlpha1 = parseInt(number_b % 26);
    resCollection.push(String.fromCharCode(size1+96)+String.fromCharCode(numOfAlpha1+96));
  }
  return resCollection;
}

module.exports = get_letter_interval_2;

