function caesarCipherEncrypt(string, key) {
    return encrypt(string.toUpperCase(), key);
}

// Function will implement Caesar Cipher to
// encrypt / decrypt the msg by shifting the letters
// of the message acording to the key
function encrypt(message, key) {
    const codeA = 'A'.codePointAt(0);
    const codeZ = 'Z'.codePointAt(0);

    let encMessage = '';

    for (const chr of message) {
        let code = chr.codePointAt(0);

        if (code >= codeA && code <= codeZ) {
            code -= codeA;
            code = mod(code + key, 26);
            code += codeA;
        }
        encMessage += String.fromCodePoint(code);
    }

    return encMessage;
}

// Implement modulo by replacing the negative operand
// with an equivalent positive operand that has the same wrap-around effect
function mod(n, p) {
    if (n < 0) n = p - (Math.abs(n) % p);

    return n % p;
}
module.exports = caesarCipherEncrypt;
