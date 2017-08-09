'use strict';

function get_intersection(collection_a, collection_b) {
  var resCollection = [];
  collection_b.map(function(elem){
    var index = collection_a.indexOf(elem);
    if(index >= 0){
      resCollection.push(collection_a[index]);
    }
  });
  return resCollection;

}

module.exports = get_intersection;
