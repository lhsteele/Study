/* 
stored in arrays
values are stored in a node which has 'value' and 'next' properties

Stack: LIFO
top => first node
bottom => last node
length => number of nodes in stack

insertion => push()
deletion => pop()
length => size()

Queue: FIFO
front => first node
back => last node
length => number of nodes in queue
*/

class Node {
  constructor(val) {
    this.value = val
    this.next = null
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.top) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const temp = this.top;
      this.top = newNode;
      this.top.next = temp;
    }
    return ++this.length;
  }

  pop() {
    if (!this.top) return null;

    const temp = this.top;
    
    if (this.top === this.bottom) {
      this.bottom = null;
    }

    this.top = this.top.next;
    this.length--;
    return temp.value;
  }

  size() {
    return this.length;
  }
}

let stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack)
stack.pop()
stack.pop()
console.log(stack)
console.log(stack.size());


