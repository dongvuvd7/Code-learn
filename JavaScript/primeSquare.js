/**
 * Check if a^2 - b^2 is a prime number
 * 1 <= a,b <= 10^18
 */
function primeSquare(a,b){
    if(a - b != 1)  return false;
    return isPrime(a + b);
}

function isPrime(n){
    if(n < 2) return false;
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i == 0) return false;
    }
    return true;
}

console.log(primeSquare(6, 5));