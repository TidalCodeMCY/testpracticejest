const cipher = require('./ciper.js');

test('Does cipher return the string proper.', () => {
    expect(cipher('java', 1)).toBe('KBWB');
});

test('Does cipher return the string proper.', () => {
    expect(cipher('kbwb', -1)).toBe('JAVA');
});
