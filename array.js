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

  delete(index) {
    delete this.storage[index];
    this._shiftItems(index);
  }

  _shiftItems(index) {
    for (let key = index; key < this.length; key++) {
      console.log(key);
      this.storage[key] = this.storage[key + 1];
    }
    delete this.storage[this.length - 1];
    this.length--;
  }
}

const testArray = new Array();
