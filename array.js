class Array {
  constructor() {
    this.storage = {};
    this.length = 0;
  }

  get(index) {
    return this.storage[index];
  }

  push(value) {
    return (this.storage[this.length++] = value);
  }

  pop() {
    if (this.length) {
      this.length--;
      const value = this.storage[this.length];
      delete this.storage[this.length];
      return value;
    }
    return null;
  }

  forEach(callback) {
    for (let key in this.storage) {
      callback(this.storage[key], key);
    }
  }

  map(callback) {
    const newArray = [];
    for (let key in this.storage) {
      newArray.push(callback(this.storage[key], key));
    }
    return newArray;
  }
}

const testArray = new Array();
