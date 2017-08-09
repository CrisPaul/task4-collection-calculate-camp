function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var resCollection = [];
  collection_a.forEach(function (elem) {
    if(object_b['value'].indexOf(elem) >= 0){
      resCollection.push(elem);
    }
  })
  return resCollection;
}

module.exports = collect_same_elements;
