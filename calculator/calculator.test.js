const calculator = require('./calculator.js');

// new test
it('runs the tests', () => {
  // assertions - something that something should do
  expect(true).toBe(true);
});
// test runner => the library that runs the tests
// assertion library => the library that handles the tests cases

// what should the add function do?

// test suite is a collection of tests
describe('the calculator', () => {
  describe('the add method', () => {
    it('should add two numbers', () => {
      const { add } = calculator;

      expect(add(2,2)).toBe(4);
      expect(add(2,1)).toBe(3);
      expect(add(-2,4)).toBe(2);
    });

    it('should return 0 on no arguments', () => {
      const { add } = calculator;

      expect(add()).toBe(0);
    });
  });
});

// take two values and combine them
// return one value
// add(2,2) => 4

// what should happen on no arguments?
// what about one argument?
// what about many?