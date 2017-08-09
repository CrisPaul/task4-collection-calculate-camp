'use strict';
function intToAlpha(n){
  //第1个是a，第20个是t，第53个是ba
  var size = n/26;
  var numOfAlpha = n%26;

  var highAlpha = String.fromCharCode(size+96);
  var lowAlpha = String.fromCharCode(numOfAlpha + 96);

  return highAlpha+lowAlpha;
}
function median_to_letter(collection) {
  var len = collection.length;
  var midNum = collection[0];
  if(len % 2 == 0){
    midNum += Math.ceil((len-1)/2);
  }else{
    midNum += (len-1)/2;
  }
  return intToAlpha(midNum);
}

module.exports = median_to_letter;
