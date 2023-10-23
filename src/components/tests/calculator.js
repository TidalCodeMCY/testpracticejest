class Calculator {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    Add() {
        return this.x + this.y;
    }

    Multiply() {
        return this.x * this.y;
    }

    Divide() {
        return this.x / this.y;
    }

    Subtract() {
        return this.x - this.y;
    }
}

module.exports = Calculator;
