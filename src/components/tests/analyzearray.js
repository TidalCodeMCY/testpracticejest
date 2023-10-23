function analyzeArray(array) {
    const avg = getAverage(array);
    const minimum = getMin(array);
    const maximum = getMax(array);
    const arrLength = array.length;

    const object = {
        average: avg,
        min: minimum,
        max: maximum,
        length: arrLength,
    };

    return object;
}

function getAverage(array) {
    let value = 0;

    for (const val of array) {
        value += val;
    }

    return value / array.length;
}

function getMin(array) {
    let minimum = array[0];

    for (const each of array) {
        if (each < minimum) {
            minimum = each;
        }
    }

    return minimum;
}

function getMax(array) {
    let maximum = array[0];

    for (const each of array) {
        if (each > maximum) {
            maximum = each;
        }
    }

    return maximum;
}

module.exports = analyzeArray;
