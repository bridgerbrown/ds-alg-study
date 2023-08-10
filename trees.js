function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}


class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);
    if (this.root === null) {
      this.root = node;
    } else {
      let current = this.root;
      const returnThis = () => { return this };
      while (true) {
        if (value < current.value) {
          current.left ? current = current.left : (current.left = node, returnThis());
        } else {
          current.right ? current = current.right : (current.right = node, returnThis());
        }
      } 
    }
  }

  lookup(value) {
    if (!this.root) return false;
    let current = this.root;
    while (current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value){
        current = current.right;
      } else if (current.value === value) {
        return current;
      }
    }
    return false;
  }

  remove(value) { // not really needed for interviews, overly complex
    if (!value || this.root === null) return this;
    let current = this.root;
    let parent = null;
    while (current) {
      if (value < current.value) {
        parent = current;
        current = current.left
      } else if (value > current.value) {
        parent = current;
        current = current.right;
      } else if (current.value === value) {
        if (current.right === null) {
          if (parent === null) {
            this.root = current.left;
          } else {
            if (current.value < parent.value) {
              parent.left= current.left;
            } else if (current.value > parent.value) {
              parent.right = current.left;
            }
          }
        } else if (current.right.left === null) {
          if (parent === null) {
            this.root = current.left;
          } else {
            current.right.left = current.left;
            if (current.value < parent.value) {
              parent.left = current.right;
            } else if (current.value > parent.value) {
              parent.right = current.right;
            }
          }
        } else {
          let leftmost = current.right.left;
          let leftmostParent = current.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }
          leftmostParent.left = leftmost.right;
          leftmost.left = current.left;
          leftmost.right = current.right;
          if (parent === null) {
            this.root = leftmost;
          } else {
            if (current.value < parent.value) {
              parent.left = leftmost;
            } else if (current.value > parent.value) {
              parent.right = leftmost;
            }
          }
        }
      return true;
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.remove(4);
