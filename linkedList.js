class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  createNode(value, prev, next = null) {
    const node = {
      value,
      next,
      prev,
    };
    return node;
  }

  append(value) {
    const node = this.createNode(value, this.tail);
    this.tail.next = node;
    this.tail = node;
    this.length += 1;
    return this;
  }

  prepend(value) {
    const node = this.createNode(value, null, this.head);
    this.head = node;
    this.length += 1;
    return this;
  }

  traverseToIndex(index) {
    let currentIndex = 1;
    let currentNode = this.head.next;

    while (currentIndex < index) {
      currentIndex += 1;
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  insert(index, value) {
    if (index === 0) {
      return this.prepend(value);
    }

    if (index > this.length) {
      return this.append(value);
    }

    const node = this.createNode(value);
    const before = this.traverseToIndex(index - 1);
    const after = before.next;
    node.next = after;
    node.prev = before;
    before.next = node;
    after.prev = node;
    this.length += 1;
    return this;
  }

  remove(index) {
    const before = this.traverseToIndex(index - 2);
    const deletedNode = before.next;
    const after = deletedNode.next;
    before.next = after;
    this.length -= 1;
    return this;
  }

  show() {
    const array = [];
    let currentNode = this.head;
    while (currentNode) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  reverse() {
    if (this.head.next) {
      let first = this.head;
      this.tail = first;
      let second = first.next;

      while (second) {
        const third = second.next;
        second.next = first;
        // increment the variables
        first = second;
        second = third;
      }

      this.head.next = null;
      this.head = first;
    }
  }
}

[9, "big", "inserted", 4, "butts", 6];
const list = new LinkedList(4);
list.append("butts");
list.append(6);
list.prepend("big");
list.prepend(9);
list.insert(2, "inserted");

console.log(list.show());
list.reverse();
console.log(list.show());
