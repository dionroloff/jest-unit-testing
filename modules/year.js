const year = function(a) {
    //if divisible by 100, and NOT divisible by 400, return false
    if (a % 100 === 0 && a % 400 !== 0) {
        return false;
    } else if (a % 400 === 0){
        return true;
    } else if (a % 4 === 0){
        return true;
    } else {
        return false;
    }
 
}

module.exports = year;