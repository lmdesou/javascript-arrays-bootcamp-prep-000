var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

//should return a new array
function addElementToBeginningOfArray(array,item){
 var newArray = [item,...array];
  return newArray;
}

//should modify the original array
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array
}

//should return new array
function addElementToEndOfArray(array, element){
var newArray = [...array, element]
  return newArray
}

// should modify the original array
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array
}

function accessElementInArray(array, index) {
  array[index]
  return array
}
