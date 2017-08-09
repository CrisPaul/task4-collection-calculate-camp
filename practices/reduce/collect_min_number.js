'use strict';

function collect_min_number(collection) {
  var resCollection = new Array();
  resCollection = collection .reduce(function(x,y){
    return x<y?x:y;
  })
  return resCollection;
}

module.exports = collect_min_number;

