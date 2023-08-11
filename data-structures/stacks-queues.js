/*
 * Stack Implementation
*/

// Linked Lists

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const node = new Node(value);
    if (!this.length) {
      this.top = node;
      this.bottom = node;
    } else {
      const temp = this.top;
      this.top = node;
      this.top.next = temp;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.length) return
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const temp = this.top;
    this.top = this.top.next;
    this.length--;
    return temp;
  }
}

const myStack = new Stack();
myStack.push("dog");
myStack.push("cat");
myStack.push("hamster");
myStack.pop("cat");
myStack.peek();


// Arrays

class ArrNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class ArrStack {
  constructor() {
    this.array = [];
  }

  peek() {
    return this.array[this.array.length - 1];
  }

  push(value) {
    this.array.push(value);
    return this;
  }

  pop() {
    this.array.pop();
    return this;
  }
}

const myArrStack = new Stack();
myArrStack.push("dog");
myArrStack.push("cat");
myArrStack.push("hamster");
myArrStack.pop("cat");
myArrStack.peek();


/*
 * Queue Implementation
*/

class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const node = new QueueNode(value);
    if (!this.length) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (!this.first) return null;
    if (this.first === this.last) {
      this.last = null;
    }
    const removed = this.first;
    this.first = this.first.next;
    this.length--;
    return removed;
  }
}

const myQueue = new Queue;
myQueue.peek();
myQueue.enqueue("dog");
myQueue.enqueue("cat");
myQueue.enqueue("hamster");
myQueue.dequeue();
myQueue.peek();

/*
 * Exercise: Implement a queue using stacks
*/

class StackQueue {
  constructor() {
    this.first = [];
    this.last = [];
  }

  enqueue(value) {
    const length = this.first.length;
    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop());
    }
    this.last.push(value);
    return this;
  }

  dequeue() {
    const length = this.last.length;
    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop());
    }
    this.first.pop();
    return this;
  }

  peek() {
    if (this.last.length > 0) {
      return this.last[0];
    }
    return this.first[this.first.length - 1];
  }
}
