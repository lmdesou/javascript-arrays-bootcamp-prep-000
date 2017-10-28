var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

//should return a new array
function addElementToBeginningOfArray(array, element) {
  var newArray = [element, ...array];
  return newArray
}

//should modify the original array
function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element);
}

//should return new array
function addElementToEndOfArray(array, element){
var newArray = [...array, element]
  return newArray
}

// should modify the original array
function destructivelyAddElementToEndOfArray(array, element) {
  return array.push(element);
}
array.length()
