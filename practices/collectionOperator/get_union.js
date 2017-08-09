'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  var resCollection = [];
  collection_b.map(function(elem){
    if(collection_a.indexOf(elem) < 0){
      resCollection.push(elem);
    }
  })
  return collection_a.concat(resCollection);
}

module.exports = get_union;

