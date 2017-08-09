'use strict';
var rank_asc = function(collection){
  var resCollection  = new Array();
  var objArray = collection.sort();
  resCollection = objArray.reverse();

  return resCollection;
};

module.exports = rank_asc;
