// Linear Search
var values = ['one', 'two', 'three', 'four'];

values.indexOf('two');

values.findIndex((item) => {
  return item === 'two';
});

values.find((item) => {
  return item === 'two';
});

values.includes('two');


// Breadth First Search
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    // ...
  }

  lookup(value) {
    // ... 
  }

  remove(value) { 
    // ...  
  }

  breadthFirstSearch() {
    let current = this.root;
    let list = [];
    let queue = [];
    queue.push(current);

    while (queue.length > 0) {
      current = queue.shift();
      list.push(current.value);
      if (current.left) {
        queue.push(current.left)
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    return list;
  }

  breadthFirstSearchRecursive(queue, list) {
    if (!queue.length) return list;
    let current = queue.shift();
    list.push(current.value);
    if (current.left) {
      queue.push(current.left)
    }
    if (current.right) {
      queue.push(current.right);
    }
    return this.breadthFirstSearchRecursive(queue, list);
  }
}
const tree = new BinarySearchTree();
breadthFirstSearch();
breadthFirstSearchRecursive([tree.root], []);
