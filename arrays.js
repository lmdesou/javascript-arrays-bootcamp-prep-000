var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

//should return a new array
function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
  const newArray = [element, ...array]
}

//should modify the original array
function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element);
}

//should return new array
function addElementToEndOfArray(array, element){
  return [...array, element]
  const newArray = [...array, element]
}

// should modify the original array
function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.push(element);
}
