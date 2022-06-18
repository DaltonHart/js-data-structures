class Queue {
  constructor() {
    this.storage = {};
    this.start = 0;
    this.end = 0;
  }

  enqueue(value) {
    return (this.storage[this.end++] = value);
  }

  dequeue() {
    const value = this.storage[this.start];
    if (this.size()) {
      delete this.storage[this.start];
      this.start++;
      return value;
    }
    return null;
  }

  size() {
    return this.end - this.start;
  }
}
