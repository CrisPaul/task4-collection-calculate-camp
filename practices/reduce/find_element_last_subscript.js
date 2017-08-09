'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  var reverseCollection = collection.reverse();
  var index = reverseCollection.indexOf(element);
  if(index > 0){
    return reverseCollection.length-1-index;
  }
}
module.exports = calculate_elements_sum;
