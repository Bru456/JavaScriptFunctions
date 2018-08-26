/**
 * Checks if passed value is numeric. Integers or decimals accepted as numeric.
 * @param value
 * @returns {boolean}
 * @constructor
 */
function IsNumeric(value) {
    return !isNaN(value);
}

/**
 * Rounds up to the specified step, default is 1. (e.g. value = 4.3 step = 0.5 returns 4.5)
 * @param value
 * @param step
 * @returns {number}
 * @constructor
 */
function RoundUpTo(value, step) {
    step || (step = 1)
    var remainder = value % step;
    if (remainder > 0)
        value = value - remainder + step;
    return value;
}

/**
 * Rounds down to the specified step, default is 1. (e.g. value = 4.3 step = 0.5 returns 4)
 * @param value
 * @param step
 * @returns {number}
 * @constructor
 */
function RoundDownTo(value, step) {
    step || (step = 1)
    var remainder = value % step;
    if (remainder > 0)
        value = value - remainder;
    return value;
}
