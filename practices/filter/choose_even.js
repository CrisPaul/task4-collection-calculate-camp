'use strict';

function choose_even(collection) {
    var resCollection = [];
    resCollection = collection.filter(function(elem){
      return elem%2 == 0;
    })
    return resCollection;
}

module.exports = choose_even;
