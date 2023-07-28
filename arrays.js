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
