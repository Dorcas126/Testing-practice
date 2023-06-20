
function stringLength(string) {
  return string.length;
}

module.exports = {
  stringLength,
};

function reverseString(string) {
    return string.split('').reverse().join('');
  }
  
  module.exports = {
    stringLength,
    reverseString,
  };

function capitalize(string) {
    if (string.length === 0) {
      return '';
    }
  
    const firstChar = string[0].toUpperCase();
    const restOfString = string.slice(1);
  
    return firstChar + restOfString;
  }
  
  module.exports = {
    stringLength,
    reverseString,
    capitalize,
  };
  