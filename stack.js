class Stack {
  constructor() {
    this.storage = {};
    this.start = 0;
    this.end = 0;
  }

  enstack(value) {
    return (this.storage[this.end++] = value);
  }

  destack() {
    if (this.size()) {
      this.end--;
      const value = this.storage[this.end];
      delete this.storage[this.end];
      return value;
    }
    return null;
  }

  size() {
    return this.end - this.start;
  }
}
