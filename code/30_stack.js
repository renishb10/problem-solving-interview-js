/* 
Q: Implement stack using Linked List
LIFO

F                     L
500 -> 400 -> 300 -> 200 
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.first === null) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let tempNode = this.first;
      this.first = newNode;
      newNode.next = tempNode;
    }
    return ++this.size;
  }

  pop() {
    if (this.size === 0) return null;
    let tempNode = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return tempNode.val;
  }
}
