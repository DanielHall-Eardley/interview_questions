class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first.value;
  }

  add(value) {
    const node = {
      value,
      next: null,
    };

    this.length += 1;
    if (!this.first) {
      this.first = node;
      this.last = node;
      return this;
    }

    let currentNode = this.first;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    this.last = node;
    return this;
  }

  remove() {
    if (!this.first) {
      return null;
    }

    const removedValue = this.first.value;
    this.first = this.first.next;
    this.length -= 1;

    if (this.length === 0) {
      this.last = null;
    }

    return removedValue;
  }

  show() {
    return this;
  }
}

const queue = new Queue();
queue.add("Gary");
queue.add("Bob");
queue.add("Garfield");
console.log(queue.show());
console.log(queue.peek());
queue.remove();
queue.remove();
console.log(queue.show());
queue.remove();
queue.remove();
console.log(queue.show());
