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

  depthFirstSearchInOrder() {
    return traverseInOrder(this,root, []);
  }

  depthFirstSearchPreOrder() {
    return traversePreOrder(this,root, []);
  }

  depthFirstSearchPostOrder() {
    return traversePostOrder(this,root, []);
  }
}

function traverseInOrder(node, list) {
  if (node.left) traverseInOrder(node.left, list);
  list.push(node.value);
  if (node.right) traverseInOrder(node.right, list);
  return list;
}

function traversePreOrder(node, list) {
  list.push(node.value);
  if (node.left) traversePreOrder(node.left, list);
  if (node.right) traversePreOrder(node.right, list);
  return list;
}

function traversePostOrder(node, list) {
  if (node.left) traversePostOrder(node.left, list);
  if (node.right) traversePostOrder(node.right, list);
  list.push(node.value);
  return list;
}

const tree = new BinarySearchTree();
tree.insert(1);
tree.insert(2);
tree.insert(5);
tree.insert(40);
tree.insert(88);
tree.breadthFirstSearch();
tree.breadthFirstSearchRecursive([tree.root], []);

/*
 * Exercise: Validate Binary Search Tree
*/

var isValidBST = function(root) {
  return validate(root, -Infinity, Infinity);
};

var validate = function(node, lower, upper) {
  if (node == null) return true;
  if ((lower < node.val) && (node.val < upper)) {
    return validate(node.left, lower, node.val) && validate(node.right, node.val, upper);
  } else {
    return false;
  };
}

// or

var isValidBSTtwo = function(root, min = null, max = null) {
  if (!root) return true;
  if (min && root.val <= min.val) return false;
  if (max && root.val >= max.val) return false;
  return isValidBSTtwo(root.left, min, root) && isValidBSTtwo(root.right, root, max);
};
