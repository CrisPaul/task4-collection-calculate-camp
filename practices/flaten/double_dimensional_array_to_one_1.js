'use strict';

function double_to_one(collection) {
  var slim =',' , resCollection = [];
  var arr = collection.toString().split(slim);
  arr.forEach(function(elem){
      var num = parseInt(elem);
      resCollection.push(num);
  })
  return resCollection;
}

module.exports = double_to_one;
