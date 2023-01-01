class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(node) {
    this.top = null;
    this.bottom = null;
    this.length = 0;
    this.nodeCreator = node;
  }

  peek() {
    if (!this.top) return null;
    const top = this.top.value;
    return top;
  }

  addToTop(value) {
    const newNode = new this.nodeCreator(value);
    if (this.length === 0) {
      this.bottom = newNode;
    }

    const currentStack = this.top;
    newNode.next = currentStack;
    this.top = newNode;
    this.length += 1;
    return this;
  }

  pop() {
    if (!this.top) {
      this.bottom = null;
      return null;
    }
    const removeTop = this.top.value;
    const newStack = this.top.next;
    this.top = newStack;
    this.length -= 1;
    return removeTop;
  }

  print() {
    return this;
  }
}

const stack = new Stack(Node);
stack.addToTop(3);
stack.addToTop(1);
stack.addToTop(5);
stack.addToTop("stuff");
stack.pop();
stack.pop();

// console.log(stack.peek());
console.log(stack.print());
