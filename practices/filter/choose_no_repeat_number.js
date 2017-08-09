'use strict';

function choose_no_repeat_number(collection) {
    var resCollection = [];
    resCollection = collection.filter(function(elem,index,arr){
      return arr[index] !== arr[index+1];
    })
    return resCollection;
}

module.exports = choose_no_repeat_number;
