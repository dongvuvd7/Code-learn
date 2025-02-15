
/**
 * Calculates the sum of the first n Fibonacci numbers mod 10^9 + 7
 * Solve with big integer arithmetic
 */
function fibSum(n){
    let res = 0;
    let a = 0;
    let b = 1;
    for (let i = 0; i < n; i++){
        res = (res + b) % (10**9 + 7);
        let temp = b;
        b = (a + b) % (10**9 + 7);
        a = temp;
    }
    return res;
}

console.log(fibSum(3));