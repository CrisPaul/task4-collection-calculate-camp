function collect_same_elements(collection_a, collection_b) {
  var resCollection = [];
  collection_a.forEach(function (elem) {
    if(collection_b[0].indexOf(elem) >= 0){
      resCollection.push(elem);
    }
  })
  return resCollection;
}

module.exports = collect_same_elements;
