const divide = require('../modules/divide');

test('this will return "Fizz" if the parameter is divisible by 3', () => {
    expect(divide(9)).toBe("Fizz");
})
test('this will return "Buzz" if the parameter is divisible by 5', () => {
    expect(divide(20)).toBe("Buzz");
})
test('this will return "FizzBuzz" if the parameter is divisible by both 3 and 5', () => {
    expect(divide(15)).toBe("FizzBuzz");
})
test('this will return the number if that number is not divisible by 3 or 5', () => {
    expect(divide(0)).toBe(0);
})