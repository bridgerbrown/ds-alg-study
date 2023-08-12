const numbers = [99, 44, 6, 2, 1, 5, 64, 86, 298, 4, 0];

// Bubble Sort
function bubbleSort(arr) {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
} // O(n^2) time, O(1) space
bubbleSort(numbers);

// Selection Sort
function selectionSort(arr) {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    let min = i;
    let temp = arr[i];
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}; // O(n^2) time, O(1) space
selectionSort(numbers);

// Insertion Sort
function insertionSort(arr) {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    if (arr[i] < arr[0]) {
      arr.unshift(arr.splice(i, 1)[0]);
    } else {
      for (let j = 1; j < i; j++) {
        if (arr[i] > arr[j - 1] && arr[i] < arr[j]) {
          arr.splice(j, 0, arr.splice(i, 1)[0]);
        }
      }
    }
  }
}

// Merge Sort
function mergeSort(arr) {
  if (arr.length === 1) return arr;

  const length = arr.length;
  const middle = Math.floor(length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Quick Sort
function quickSort(arr, left, right) {
  let pivot;
  let partitionIndex;

  if(left < right) {
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}

function partition(arr, pivot, left, right) {
  let pivotValue = arr[pivot];
  let partitionIndex = left;

  for (let i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
}

function swap(arr, firstIndex, secondIndex) {
  var temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
}

quickSort(numbers, 0, numbers.length - 1);

/*
 * Exercise: Sorting Interview
*/

//#1 - Sort 10 schools around your house by distance:
// Insertion Sort

//#2 - eBay sorts listings by the current Bid amount:
// Radix or Counting Sort

//#3 - Sport scores on ESPN
// Quick Sort

//#4 - Massive database (can't fit all into memory) needs to sort through past year's user data
// Merge Sort

//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews
// Insertion Sort

//#6 - Temperature Records for the past 50 years in Canada
// Quick Sort

//#7 - Large user name database needs to be sorted. Data is very random.
// Merge Sort

//#8 - You want to teach sorting for the first time
// Bubble Sort or Selection Sort
