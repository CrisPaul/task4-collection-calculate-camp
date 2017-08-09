'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  var resCollection = new Array();
  resCollection = collection_a.filter(function(elem){
    if(collection_b.indexOf(elem)<0)
      return elem;
  })
  return resCollection;
}

module.exports = choose_no_common_elements;
