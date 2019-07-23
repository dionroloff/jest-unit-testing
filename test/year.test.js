const year = require('../modules/year');

test('this will return a boolean if the input year is a leap year (divisible by 4)', () => {
    expect(year(2004)).toBe(true);
})
test('this will return false if the year is divisible by 100', () => {
    expect(year(2100)).toBe(false);
})
test('this will return true if the leap year is divisble by 400', () => {
    expect(year(1600)).toBe(true);
})