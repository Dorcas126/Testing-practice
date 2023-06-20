// File: calculator.test.js
const Calculator = require('./calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    it('returns the sum of two numbers', () => {
      const result = calculator.add(2, 3);
      expect(result).toBe(5);
    });

    it('returns a negative sum for negative numbers', () => {
      const result = calculator.add(-5, -3);
      expect(result).toBe(-8);
    });

    it('returns a float sum for decimal numbers', () => {
      const result = calculator.add(2.5, 1.5);
      expect(result).toBe(4);
    });
  });

  describe('subtract', () => {
    it('returns the difference of two numbers', () => {
      const result = calculator.subtract(5, 3);
      expect(result).toBe(2);
    });

    it('returns a negative difference for the second number larger than the first', () => {
      const result = calculator.subtract(3, 5);
      expect(result).toBe(-2);
    });
  });

  describe('divide', () => {
    it('returns the division of two numbers', () => {
      const result = calculator.divide(10, 2);
      expect(result).toBe(5);
    });

    it('throws an error for division by zero', () => {
      expect(() => {
        calculator.divide(5, 0);
      }).toThrow('Division by zero');
    });
  });

  describe('multiply', () => {
    it('returns the product of two numbers', () => {
      const result = calculator.multiply(3, 4);
      expect(result).toBe(12);
    });

    it('returns 0 when either number is 0', () => {
      const result1 = calculator.multiply(0, 5);
      const result2 = calculator.multiply(10, 0);
      expect(result1).toBe(0);
      expect(result2).toBe(0);
    });
  });
});
