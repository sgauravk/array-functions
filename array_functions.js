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

const reduce = function(reducer,list,initialVal){
  let indexToStart = 0;
  if(initialVal == undefined){
    initialVal = list[0];
    indexToStart++;
  }
  let result = initialVal;
  for(let index=indexToStart; index<list.length; index++){
    result = reducer(result,list[index]);
  }
  return result;
}


exports.map = map;
exports.filter = filter;
exports.reduce = reduce;
