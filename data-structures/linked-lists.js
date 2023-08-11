let objLinkedList = {
  head: {
    value: 10,
    next: {
      value: 5,
      next: {
        value: 16,
        next: null
      }
    },
  },
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
    }
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const leader = this.traverse(index - 1);
    newNode.next = leader.next;
    leader.next = newNode;
    this.length++;
    return this;
  }

  traverse(index) {
    let count = 0;
    let current = this.head;
    while (count !== index) {
      current = current.next;
      count++;
    }
  }

  remove(index) {
    const leader = this.traverse(index - 1);
    const nodeToDelete = leader.next;
    leader.next = nodeToDelete.next;
    this.length--;
    return this;
  }
}

const myLinkedList = new LinkedList(10);
LinkedList.append(5);
LinkedList.prepend(5);
LinkedList.insert(2, 99);
LinkedList.delete(1);

/*
 * Doubly Linked Lists
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  
  prepend(value) {
    const newNode = new Node(value);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
    }
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const leader = this.traverse(index - 1);
    newNode.next = leader.next;
    newNode.prev = leader;
    leader.next = newNode;
    this.length++;
    return this;
  }

  traverse(index) {
    let count = 0;
    let current = this.head;
    while (count !== index) {
      current = current.next;
      count++;
    }
  }

  remove(index) {
    const leader = this.traverse(index - 1);
    const nodeToDelete = leader.next;
    const nextNode = nodeToDelete.next;
    leader.next = nextNode;
    nextNode.prev = leader;
    this.length--;
    return this;
  }
}

/*
 * Exercise: reverse(), singly linked list
*/

reverse() {
  if (!this.head.next) return this.head;
  let first = this.head;
  this.tail = this.head;
  let second = first.next;
  while (second) {
    const temp = second.next;
    second.next = first;
    first = second;
    second = temp;
  }
  this.head.next = null;
  this.head = first;
  return this;
}
