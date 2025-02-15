
/**
 * Calculates the sum of (1^k + 2^k + 3^k + ... + n^k) mod 10^9 + 7
 * Solve with big integer arithmetic
 * ex: soep(21, 15) = 481387239
 */
function soep(n,k){
    let res = 0;
    for (let i = 1; i <= n; i++){
        let temp = 1;
        for (let j = 0; j < k; j++){
            temp = (temp * i) % (10**9 + 7);
        }
        res = (res + temp) % (10**9 + 7);
    }
    return res;
}

console.log(soep(21,15));