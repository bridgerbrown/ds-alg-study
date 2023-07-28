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

