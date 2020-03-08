type TraverseCallbackFunction = (element: any, index: number) => void;

class Node {
  value: any;
  next?: Node;
  previous?: Node;

  constructor(value: any) {
    this.value = value;
  }
}

export default class LinkedList {
  private head?: Node;
  private tail?: Node;
  private size: number;

  static fromArray(array: any[] = []) {
    const linkedList = new LinkedList();

    for (let i = 0; i < array.length; i++) {
      linkedList.append(array[i]);
    }

    return linkedList;
  }

  constructor() {
    this.head = undefined;
    this.tail = undefined;
    this.size = 0;

    this.getSize = this.getSize.bind(this);
    this.isEmpty = this.isEmpty.bind(this);
    this.clear = this.clear.bind(this);
    this.append = this.append.bind(this);
    this.prepend = this.prepend.bind(this);
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.getSize() === 0;
  }

  clear() {
    this.head = undefined;
    this.tail = undefined;
    this.size = 0;

    return this;
  }

  append(value: any) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.size = 1;
      return this;
    }

    node.previous = this.tail;

    if (this.tail) {
      this.tail.next = node;
    }

    this.tail = node;
    ++this.size;

    return this;
  }

  prepend(value: any) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.size = 1;

      return this;
    }

    node.next = this.head;

    if (this.head) {
      this.head.previous = node;
    }

    this.head = node;
    ++this.size;

    return this;
  }

  traverse(callback: TraverseCallbackFunction, backwards: boolean = false) {
    let pointer = backwards ? this.tail : this.head;
    let index = 0;

    while (pointer) {
      callback(pointer.value, index++);
      pointer = backwards ? pointer.previous : pointer.next;
    }
  }

  toArray() {
    let pointer = this.head;
    let index = 0;
    const output = Array(this.getSize());

    while (pointer) {
      output[index++] = pointer.value;
      pointer = pointer.next;
    }

    return output;
  }

  reverse() {
    let previous = this.head?.previous;
    let current = this.head;
    let next = this.head?.next;

    this.tail = this.head;

    while (current) {
      current.next = previous;
      current.previous = next;

      previous = current;
      current = next;
      next = current?.next;
    }

    this.head = previous;

    return this;
  }

  has(value: any) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return true;
      }

      current = current.next;
    }

    return false;
  }

  removeFirst() {
    if (this.isEmpty()) {
      return false;
    }

    const newHead = this.head?.next;

    if (newHead) {
      newHead.previous = undefined;
    }

    if (this.head) {
      this.head.next = undefined;
      --this.size;
    }

    this.head = newHead;

    if (this.getSize() <= 1) {
      if (this.tail) {
        this.tail.previous = undefined;
      }
    }

    return true;
  }
}
