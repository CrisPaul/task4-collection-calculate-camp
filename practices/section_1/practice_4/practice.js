function collect_same_elements(collection_a, object_b) {
  var resCollection = [];
  collection_a.forEach(function (elem) {
    if(object_b['value'].indexOf(elem.key) >= 0){
      resCollection.push(elem.key);
    }
  })
  return resCollection;
}

module.exports = collect_same_elements;
