'use strict';

function collect_max_number(collection) {
  var resCollection = new Array();
  resCollection = collection .reduce(function(x,y){
    return x>y?x:y;
  })
  return resCollection;
}

module.exports = collect_max_number;
