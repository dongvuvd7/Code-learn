/**
 * Tính số lượng các số chẵn trong dãy từ 1 đến n chia hết cho k.
 * @param {number} n - Số nguyên dương, giới hạn trên của dãy (1 ≤ n ≤ 10^9).
 * @param {number} k - Số nguyên dương, số chia (1 ≤ k ≤ 10^9).
 * @returns {number} Số lượng các số chẵn chia hết cho k trong khoảng [1, n].
 */
function numOfEven(n, k) {
    // Tính LCM(2, k)
    let lcm;
    if (k % 2 === 0) {
        // Nếu k chẵn, LCM(2, k) = k
        lcm = k;
    } else {
        // Nếu k lẻ, LCM(2, k) = 2 * k
        lcm = 2 * k;
    }
    
    // Số lượng số chẵn chia hết cho k là floor(n / lcm)
    return Math.floor(n / lcm);
}