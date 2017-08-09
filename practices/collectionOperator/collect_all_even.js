'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  var resCollection = new Array();
  collection.map(function(elem){
    if(elem%2 == 0){
      resCollection.push(elem);
    }
  })
  return resCollection;
}

module.exports = collect_all_even;
