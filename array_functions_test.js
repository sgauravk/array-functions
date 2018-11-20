const assert = require('assert');
const lib = require('./array_functions.js');
const { myMap } = lib;

const decrement = function(num){
  return num-1;
}

const decrementTest = function(){
  assert.deepEqual(myMap(decrement,[]),[]);
  assert.deepEqual(myMap(decrement,[1]),[0]);
  assert.deepEqual(myMap(decrement,[1,2]),[0,1]);
  assert.deepEqual(myMap(decrement,[-1,-2]),[-2,-3]);
  assert.deepEqual(myMap(decrement,[1,2,3]),[0,1,2]);
  assert.deepEqual(myMap(decrement,[2,3,0]),[1,2,-1]);
  console.log("test passed...!");
}
decrementTest();
