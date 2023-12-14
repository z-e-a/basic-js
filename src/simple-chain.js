const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    if(value===undefined) {
      this.arr.push('');
    } else {
      this.arr.push(value);
    }
    return this;
  },
  removeLink(position) {
    if(position===undefined ||
      position < 1 ||
      position > this.arr.length ||
      !Number.isInteger(position)
      // isNaN(parseInt(position))
      ){
        this.arr = [];
        throw new Error("You can\'t remove incorrect link!");
      } else{
        this.arr.splice(position-1, 1);
      }
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let outString = '';
    for (let i = 0; i < this.arr.length; i++) {
      outString += '( ' + this.arr[i] + ' )';
      outString += (i<(this.arr.length-1)) ? '~~' : '';
    }
    this.arr = [];
    return outString;
  }
};

module.exports = {
  chainMaker
};
