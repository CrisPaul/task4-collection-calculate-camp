function create_updated_collection(collection_a, object_b) {
  var resCollection = new Array();
  var size;
  for(var i=0; i<collection_a.length; i++){
    if(object_b['value'].indexOf(collection_a[i].key) >= 0){
      size = parseInt((collection_a[i].count)/3);
      if(size!=0){
        resCollection.push({
          key:    collection_a[i].key, count:  collection_a[i].count - size
        });
      }
    }else{
      resCollection.push({
        key:  collection_a[i].key,  count:   collection_a[i].count
      });
    }
  }
  return resCollection;
}

module.exports = create_updated_collection;
