/*
Big O and Scalability
*/
//
// Linear Time
//
const nemo = ['nemo'];

function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log("Found nemo.")
    }
  }
  let t1 = performance.now();
  console.log("Call to find Nemo took " + (t1 - t0) + " milliseconds");
}

findNemo(nemo); // O(n) --> Linear Time

//
// Constant Time
//
const boxes = [0, 1, 2, 3, 4, 5];

function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]);
  console.log(boxes[1]);
}

logFirstTwoBoxes(boxes); // O(2) --> Constant Time

// Example of counting
function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input; i++) {
    let x = i + 1; // O(n)
    let y = i + 1; // O(n)
    let z = i + 1; // O(n)
  }
  for (let j = 0; j < input; j++) {
    let p = j + 1; // O(n)
    let q = j + 1; // O(n)
  }
  let who = "Idk"; // O(1)
} // Big O = O(4 + 7n), or just O(n)

// Example of different inputs
function compressBoxesTwice(boxes, boxes2) {
  boxes.forEach(function(boxes) {
    console.log(boxes);
  });

  boxes2.forEach(function(boxes) {
    console.log(boxes);
  });
} // O(a + b), not O(2n) because loops have different inputs


//
// Quadratic Time 
//
const boxes1 = [1, 2, 3, 4, 5];

function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(i, j);
    }
  }
}

logAllPairsOfArray(boxes1); // O(n^2) nested loops


//
// Space Complexity
//

function boo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log("boo!");
  }
}

boo([1,2,3,4,5]) // Space complexity of O(1)

function arrayOfHiNTimes(n) {
  let hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi";
  }
  return hiArray;
}

arrayOfHiNTimes(6) // Space complexity of O(n)
