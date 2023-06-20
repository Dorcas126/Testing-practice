// File: stringUtils.test.js
const { stringLength } = require('./stringUtils');

describe('stringLength', () => {
  it('returns the correct length of a string', () => {
    const length = stringLength('hello');
    expect(length).toBe(5);
  });

  it('returns 0 for an empty string', () => {
    const length = stringLength('');
    expect(length).toBe(0);
  });

  it('throws an error for strings longer than 10 characters', () => {
    expect(() => {
      stringLength('This is a very long string');
    }).toThrow('String is too long');
  });
});


describe('reverseString', () => {
    it('returns the reversed string', () => {
      const reversed = reverseString('hello');
      expect(reversed).toBe('olleh');
    });
  });

describe('capitalize', () => {
    it('capitalizes the first character of a string', () => {
      const capitalized = capitalize('hello');
      expect(capitalized).toBe('Hello');
    });
  
    it('returns an empty string for an empty input', () => {
      const capitalized = capitalize('');
      expect(capitalized).toBe('');
    });
  });
  
