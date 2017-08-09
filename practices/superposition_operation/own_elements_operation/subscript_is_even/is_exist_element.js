'use strict';
var is_exist_element = function(collection,element){
  var tmp = [];
  collection.forEach(function (elem,key,arr) {
    if(key % 2 == 0){
      tmp.push(elem);
    }
  })
  var flag = tmp.indexOf(element) >= 0?true:false;
  return flag;
};
module.exports = is_exist_element;
