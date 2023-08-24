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

  unShift(val) {
    const newNode = new Node(val);
    if (this.count === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.count++;
    return this;
  }

  get(index) {
    if (index >= this.count && index < 0) return undefined;
    const midIndex = Math.floor(this.count / 2);
    let times, currentNode;
    if (index <= midIndex) {
      times = 0;
      currentNode = this.head;
      while (times !== index) {
        currentNode = currentNode.next;
        times++;
      }
    } else {
      times = this.count - 1;
      currentNode = this.tail;
      while (times !== index) {
        currentNode = currentNode.prev;
        times--;
      }
    }
    return currentNode;
  }

  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index > this.count && index < 0) return undefined;
    if (index === 0) return this.unShift(val);
    if (index === this.count) return this.push(val);

    const newNode = new Node(val);
    const beforeNode = this.get(index - 1);
    const afterNode = beforeNode.next;

    (beforeNode.next = newNode), (newNode.prev = beforeNode);
    (newNode.next = afterNode), (afterNode.prev = newNode);
    this.count++;
    return this;
  }

  remove(index) {
    if (index >= this.count && index < 0) return undefined;
    if (index === 0) return this.shift();
    if (index === this.count - 1) return this.pop();

    const removedNode = this.get(index);
    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;
    removedNode.next = null;
    removedNode.prev = null;
    this.count--;
    return removedNode;
  }
}
