const reverseString = require('./reversestring.js');

test('Checks if string given is reveresed', () => {
    expect(reverseString('Revolution')).toBe('noituloveR');
});
