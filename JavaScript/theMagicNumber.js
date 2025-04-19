function theMagicNumber(a){
    if (a === 0) return false;
    let aString = Math.abs(a).toString();
    let sumOfADigits = 0;
    for(let i = 0; i < aString.length; i++){
        sumOfADigits += parseInt(aString[i]);
    }
    return a%sumOfADigits === 0;
}