function count_same_elements(collection) {
  //在这里写入代码
  var result =[]
  collection.forEach(function(elem){
      for(var i=0; i<result.length; i++){
        if(result[i]['key'] == elem){
            result[i].count ++;
            return ;
        }
      }

      result.push({
        key: elem,
        count: 1
      })
  })

  return result;
}
module.exports = count_same_elements;
