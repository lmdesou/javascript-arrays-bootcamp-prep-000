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
  return [...array, element]
  const newerArray = [...array, element]
}

// should modify the original array
function destructivelyAddElementToEndOfArray(array, element) {
  return array.push(element);
}
