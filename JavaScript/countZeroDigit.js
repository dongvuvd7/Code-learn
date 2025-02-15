/**
 * Count the number of zero digits occurence in the number between a and b
 */
function countZeroDigit(a,b){
    let count = 0;
    for(let i = a; i <= b; i++){
        let str = i.toString();
        for(let j = 0; j < str.length; j++){
            if(str[j] === '0'){
                count++;
            }
        }
    }
    return count;
}

console.log(countZeroDigit(100, 110)); 