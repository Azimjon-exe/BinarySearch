const binarySearchAlgo = (array, target) => {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex <= rightIndex) {
    const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    const guess = array[middleIndex];

    if (guess === target) {
      return middleIndex;
    }

    if (guess > target) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }

  return null; //if item not found
};

console.log(binarySearchAlgo([1, 3, 5, 100, 2, 4, 9, 1100], 100));
