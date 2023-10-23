const Calculator = require('./calculator.js');

const newCalc = new Calculator(4, 8);

test('Does calculate add 2 values properly.', () => {
    expect(newCalc.Add()).toBe(12);
});

test('Does calculate multiply 2 values properly.', () => {
    expect(newCalc.Multiply()).toBe(32);
});

test('Does calculate divide 2 values properly.', () => {
    expect(newCalc.Divide()).toBe(0.5);
});

test('Does calculate subtract 2 value properly.', () => {
    expect(newCalc.Subtract()).toBe(-4);
});
