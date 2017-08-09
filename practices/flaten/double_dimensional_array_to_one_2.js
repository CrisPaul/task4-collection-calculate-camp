'use strict';

function double_to_one(collection) {
    var resCollection = [], tmp = [];
    var arr = collection.toString().split(',');
    arr.forEach(function (elem) {
      if(tmp.indexOf(elem) < 0){
        tmp.push(elem);
      }
    })
    tmp.forEach(function(element){
      resCollection.push(parseInt(element));
    })
    return resCollection;
}

module.exports = double_to_one;
