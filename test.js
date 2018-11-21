const assert = require('assert');
const lib = require('./array_functions.js');
const { map,filter } = lib;

const decrement = function(num){
  return num-1;
}

const isOdd = function(num){
  return num%2 != 0;
}

const gretestNum = function(num1,num2){
  return Math.max(num1,num2);
}

describe('map', function(){
  it('should return an emppty array', function(){
    assert.deepEqual(map(decrement,[]),[]);
  });

  it('should decrement each positive element of array by one', function(){
    assert.deepEqual(map(decrement,[1]),[0]);
    assert.deepEqual(map(decrement,[1,2]),[0,1]);
    assert.deepEqual(map(decrement,[1,2,3]),[0,1,2]);
  });

  it('should decrement each negative element of array by one', function(){
    assert.deepEqual(map(decrement,[-1,-2]),[-2,-3]);
    assert.deepEqual(map(decrement,[-12,3,0]),[-13,2,-1]);
  });
});

describe('filter',function(){
  it('should return an empty array', function(){
    assert.deepEqual(filter(isOdd,[]),[]);
    assert.deepEqual(filter(isOdd,[0,2,4]),[]);
  });

  it('should return the filtered list of odd number', function(){
    assert.deepEqual(filter(isOdd,[1,2]),[1]);
    assert.deepEqual(filter(isOdd,[1,2,-1]),[1,-1]);
    assert.deepEqual(filter(isOdd,[1,2,3,4,5,6]),[1,3,5]);
  });
});
