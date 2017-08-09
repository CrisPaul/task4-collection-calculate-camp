'use strict';
function sortNum(a,b) {
  return a-b;
}
var even_asc_odd_desc = function(collection){
    var result = [];
    var arrEven = [], arrUneven = [];
    collection.forEach(function (elem) {
      if(elem % 2 == 0){
        arrEven.push(elem);
      }else{
        arrUneven.push(elem);
      }
    })
    arrEven.sort(sortNum);
    arrUneven.sort(sortNum).reverse();
    return arrEven.concat(arrUneven);
};
module.exports = even_asc_odd_desc;
