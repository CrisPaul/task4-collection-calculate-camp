function create_updated_collection(collection_a, object_b) {
  var resCollection = new Array();
  for(var i=0; i<collection_a.length; i++){
    if(object_b['value'].indexOf(collection_a[i].key) >= 0){
      resCollection.push({
        key:    collection_a[i].key,
        count:  collection_a[i].count-1
      });
    }else{
      resCollection.push({
        key:    collection_a[i].key,
        count:  collection_a[i].count
      });
    }
  }
  return resCollection;
}

module.exports = create_updated_collection;
