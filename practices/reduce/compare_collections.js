'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  var resFlag = true, tempCollection = [];
  var strA = collection_a.toString();
  var strB = collection_b.toString();
  if(strA === strB){
    return resFlag;
  }
  resFlag = false;
  return resFlag;
}

module.exports = compare_collections;


