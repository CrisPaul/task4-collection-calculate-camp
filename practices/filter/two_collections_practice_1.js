'use strict';

function choose_common_elements(collection_a, collection_b) {
  var resCollection = new Array();
  for(var i=0 ; i < collection_a.length; i++){
    if(collection_b.indexOf(collection_a[i]) >= 0){
      resCollection.push(collection_a[i]);
    }
  }
  return resCollection;
}

module.exports = choose_common_elements;
