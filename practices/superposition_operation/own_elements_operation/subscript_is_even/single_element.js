'use strict';
var single_element = function(collection){
  var result = [], resArr = [],resArray = [];
  collection.forEach(function (elem, index, arr) {
    if(index%2 != 0){
      resArr.push(elem);
    }
  })
  resArr.forEach(function(obj){
    for(var i= 0;i<resArray.length;i++){
      if(obj == resArray[i].key){
        resArray[i].count ++;
        return ;
      }
    }
    resArray.push({
      key:obj,
      count:1
    })
  })
  resArray.map(function(t){
    if(t.count == 1)
      result.push(t.key);
  })
  return result;
};
module.exports = single_element;
