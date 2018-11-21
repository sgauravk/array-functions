const map = function(mapper,list){
  let result = [];
  for(let element of list){
    result.push(mapper(element));
  }
  return result;
}

const filter = function(predicate,list){
  let result = [];
  for(let element of list){
    if(predicate(element)){
      result.push(element);
    }
  }
  return result;
}

exports.map = map;
exports.filter = filter;
