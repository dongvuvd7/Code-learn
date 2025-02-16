/**
 * Calculates the sum of (1^k + 2^k + 3^k + ... + n^k) mod 10^9 + 7
 * Solve with big integer arithmetic
 * condition: 1 <= n <= 10^18, 1 <= k <= 100
 * ex: soep(21, 15) = 481387239
 */
function soep(n,k){
    // Initialise sum to 0
    let sum = 0;
    for (let i = 1; i <= n; i++) {
   
        // Find the value of
        // pow(i, 4) and then
        // add it to the sum
        sum += Math.pow(i, k);
    }
   
    // Return the sum
    return sum;
}