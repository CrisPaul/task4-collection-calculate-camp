'use strict';

function grouping_count(collection) {
  var resCollection={'1':0,'2':0,'3':0,'4':0};
  var compCollection = [1,2,3,4];
  var numCollection = [], tmp = [];
  for(var i=0; i<compCollection.length; i++){
    tmp = collection.filter(function(elem){
      return elem == compCollection[i];
    });
    numCollection[i] = tmp.length;
  }
  resCollection['1']=numCollection[0];
  resCollection['2']=numCollection[1];
  resCollection['3']=numCollection[2];
  resCollection['4']=numCollection[3];
  return resCollection;
}

module.exports = grouping_count;
