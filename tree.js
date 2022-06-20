class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    const child = new Tree(value);
    this.children.push(child);
  }

  contains(target) {
    if (this.value === target) {
      return true;
    }
    for (let child of this.children) {
      if (child.contains(target)) {
        return true;
      }
    }
    return false;
  }

  traverse(callback) {
    callback(this.value);

    if (!this.children) {
      return;
    }

    for (let child of this.children) {
      child.traverse(callback);
    }
  }
}

const testTree = new Tree("apple");
