class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToTail(val) {
    let newNode = new Node(val);
    
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }

    this.length++
  }

  removeNode(val) {
    if (!this.head) return null;

    let currentNode = this.head;
    let previous;

    if (currentNode.value === val) {
      this.head = currentNode.next;
    } else {
      while (currentNode.value !== val) {
        previous = currentNode;
        currentNode = currentNode.next;
      }
      previous.next = currentNode.next;
    }
    this.length--;
  }
}

let LL = new LinkedList();
LL.addToTail(1)
LL.addToTail(2)
LL.addToTail(3)
console.log(LL);
LL.removeNode(2)
console.log(LL);