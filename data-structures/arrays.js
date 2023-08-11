/*
 * INTRODUCTION
*/


const strings = ['a', 'b', 'c', 'd'];
// 4*4 = 16 bytes of storage

// push: adding item to end
strings.push('e'); // O(1)

// pop: removing item from end
strings.pop(); // O(1)

// unshift: add item to beginning
strings.unshift('x'); // O(n): it requires iterating through to reassign indices

// splice: remove and/or add item from specific index
strings.splice(2, 0, 'alien'); // O(n/2) or O(n)


/*
 * CLASSES IN JS
*/

// reference type
var object1 = { value: 10};
var object2 = object1;
var object3 = { value: 10 };

// context vs scope
const object4 = {
  a: function() {
    console.log(this);
  }
}

// instantiation
class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type)
  }
  play() {
    console.log(`I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic')


/*
 * IMPLEMENTING AN ARRAY
*/
const simpleArray = [];

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index]
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push('hi');
newArray.push('you');
newArray.push('1');
newArray.pop();
newArray.delete(0);

/*
 * Exercise: Reverse a String
*/
function reverse(str) {
  if (!str || str.length < 2 || typeof str !== 'string') return

  let reversed = [];
  for (let i = 0; i < str.length; i--) {
    reversed.push(str[i]);
  }
  return reversed.join('');
};

function reverse2(str) {
  return [...str].reverse().join('');
}

/*
 * Exercise: Merge Sorted Arrays 
*/
function mergeSortedArrays(array1, array2){
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;
  
  if(array1.length === 0) {
    return array2;
  }
  if(array2.length === 0) {
    return array1;
  }

  while (array1Item || array2Item){
   if(array2Item === undefined || array1Item < array2Item){
     mergedArray.push(array1Item);
     array1Item = array1[i];
     i++;
   }   
   else {
     mergedArray.push(array2Item);
     array2Item = array2[j];
     j++;
   }
  }
  return mergedArray;
}

mergeSortedArrays([0,3,4,31], [3,4,6,30]);

/*
 * Exercise: Two Sum
*/
var twoSum = function(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i]; 
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
}; // O(n)

/*
 * Exercise: Maximum Subarray
*/
var maxSubArray = function(nums) {
  let maxSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(0, nums[i - 1] + nums[i])
    if (nums[i] > maxSum) {
      maxSum = nums[i];
    }
  }
  return maxSum;
}
