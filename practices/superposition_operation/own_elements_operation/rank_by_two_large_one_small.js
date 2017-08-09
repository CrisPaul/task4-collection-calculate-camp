'use strict';
function sortNum(a,b){
  return a-b;
}
function rank_by_two_large_one_small(collection){
  var result = [],tmp = [];
  var temp1,temp2;
  tmp = collection.sort(sortNum);
  tmp.forEach(function (elem,index,arr) {

    if(index % 3 == 0 && index != tmp.length -2){
      temp1 = arr[index+1];
      temp2 = arr[index+2];
      arr[index+2] = arr[index];
      arr[index+1] = temp2;
      arr[index] = temp1;
      result.push(arr[index]);
      result.push(arr[index+1]);
      result.push(arr[index+2]);
    }
  })
  result.push(tmp[tmp.length-2]);
  result.push(tmp[tmp.length-1]);
  return result;
}
module.exports = rank_by_two_large_one_small;
