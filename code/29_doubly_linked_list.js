/* 
Q: Implement Doubly Linked List
*/

class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    }
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.count++;
    return this;
  }

  pop() {
    if (this.count === 0) return undefined;
    const poppedNode = this.tail;
    if (this.count === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = prevNode.prev;
      this.tail.next = null;
    }
    this.count--;
    return poppedNode;
  }

  shift() {
    if (this.count === 0) return undefined;
    const oldHeadNode = this.head;
    if (this.count === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHeadNode.next;
      this.head.prev = null;
      oldHeadNode.next = null;
    }
    this.count--;
    return oldHeadNode;
  }
}
