function reverseString(string) {
    const value = string.split('');
    const reversedStr = value.reverse();
    const reveresedJoined = reversedStr.join('');

    return reveresedJoined;
}

module.exports = reverseString;
