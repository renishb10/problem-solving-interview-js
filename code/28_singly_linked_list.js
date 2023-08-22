/* 
Q: Implement a Singly Linked List
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.count++;
    return this;
  }

  pop() {
    let currentNode = this.head;
    let prevNode = currentNode;
    while (currentNode.next) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = prevNode;
    this.tail.next = null;
    this.count--;
    if (this.count === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentNode;
  }

  shift() {
    if (!this.head) return undefined;
    let currentNode = this.head;
    this.head = this.head.next;
    this.count--;
    if (this.count === 0) {
      this.tail = null;
    }
    return currentNode;
  }

  unShift(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.count++;
    if (this.count === 1) {
      this.tail = this.head;
    }
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.count) return undefined;
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.count) return false;
    if (index === this.count) return !!this.push(val);
    if (index === 0) return !!this.unShift(val);
    let newNode = new Node(val);
    let prevNode = this.get(index - 1);
    let tempNode = prevNode.next;
    prevNode.next = newNode;
    newNode.next = tempNode;
    this.count++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.count) return undefined;
    if (index === this.count) return this.shift();
    if (index === 0) return this.pop();
    let prevNode = this.get(index - 1);
    let tempNode = prevNode.next;
    prevNode.next = tempNode.next;
    this.count--;
    return tempNode;
  }

  traverse() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.val);
      currentNode = currentNode.next;
    }
  }
}
