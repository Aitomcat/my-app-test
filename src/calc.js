function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('除数不能为0');
  }
  return a / b;
}

function power(a, b) {
  return Math.pow(a, b);
}

function modulo(a, b) {
  return a % b;
}

function square(a) {
  return a * a;
}

// 只写这一次导出即可
module.exports = { 
  add, 
  subtract, 
  multiply, 
  divide, 
  power, 
  modulo, 
  square 
};
