const myMap = function(func,array){
  let result = [];
  for(element of array){
    result.push(func(element));
  }
  return result;
}
exports.myMap = myMap;
