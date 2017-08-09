function count_same_elements(collection) {
  var sym = /\-|\[|]|\:/g;
  var result =[]
  collection.forEach(function(elem){
    var character = elem.replace(sym,',').split(',')[0];
    var len = elem.replace(sym,',').split(',')[1] ? parseInt(elem.replace(sym,',').split(',')[1]) : 1;
    for(var i=0; i<result.length; i++){
      if(result[i]['name'] == character){
        result[i].summary += len;
        return ;
      }
    }

    result.push({
      name: character,
      summary: len
    });
  })
  return result;
}

module.exports = count_same_elements;
