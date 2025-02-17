/**
 * Kiểm tra xem n có phải số nguyên tố Mersenne hay không
 * Số nguyên tố Mersenne là số nguyên tố dạng 2^k - 1 với k là số nguyên dương
 * Điều kiện đầu vào: |n| <= 10^18
 */
function isMersennePrime(n){
    if(n < 3) return false;
    if(!isPrime(n)) return false;
    let k = Math.log2(n + 1);
    console.log(k);
    return Math.pow(2, Math.floor(k)) - 1 === n;
}

function isPrime(n){
    if(n < 2) return false;
    if(n < 4) return true;
    if(n % 2 === 0) return false;
    for(let i = 3; i <= Math.sqrt(n); i += 2){
        if(n % i === 0) return false;
    }
    return true;
}

console.log(isMersennePrime(11)); // false