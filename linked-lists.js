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
}

const myLinkedList = new LinkedList(10);
LinkedList.append(5);
LinkedList.prepend(5);
LinkedList.insert(2, 99);
