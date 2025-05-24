function makeDigitsZero(n){
    let countSteps = 0;
    while(n > 0){
        let maxDigit = maxValueOfDigits(n);
        n -= maxDigit;
        countSteps++;
    }
    return countSteps;
}

/**
 * Tìm ký tự có giá trị lớn nhất trong số
 */
function maxValueOfDigits(n){
    let max = 0;
    while(n > 0){
        let digit = n % 10;
        if(digit > max){
            max = digit;
        }
        n = Math.floor(n / 10);
    }
    return max;
}