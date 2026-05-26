const { add, subtract, multiply, divide } = require('./calc');

describe('计算器测试', () => {
  test('加法：1 + 2 = 3', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('减法：5 - 3 = 2', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test('乘法：3 * 4 = 12', () => {
    expect(multiply(3, 4)).toBe(12);
  });

  test('除法：10 / 2 = 5', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('除数为0应抛出错误', () => {
    expect(() => divide(10, 0)).toThrow('除数不能为0');
  });
});
