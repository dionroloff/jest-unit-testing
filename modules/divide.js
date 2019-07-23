const divide = function(a) {
    if (a > 0) {
        if (a % 3 === 0 && a % 5 !== 0) {
            return "Fizz";
        } else if (a % 3 !== 0 && a % 5 === 0) {
            return "Buzz";
        } else if (a % 3 === 0 && a % 5 === 0) {
            return "FizzBuzz";
        } 
    } else {
        return a;
    }
}


module.exports = divide;