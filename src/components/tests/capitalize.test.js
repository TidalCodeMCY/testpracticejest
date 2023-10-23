const capitalize = require('./capitalize.js');
// Tests if the function returns the string capitalized
test('Capitalizes first letter of string', () => {
    expect(capitalize('revolt')).toBe('Revolt');
});
