const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (arr.filter((item) => Array.isArray(item)).length != 0) {
      return (
        1 +
        this.calculateDepth(
          [].concat(...arr.filter((item) => Array.isArray(item)))
        )
      );
    } else {
      return 1;
    }
  }
}

module.exports = {
  DepthCalculator
};
