/**
 * Cho một số nguyên dương n và một số nguyên dương k. Hãy tính tổng tất cả các ước của n mà ước đó chia hết cho k
 * @param {number} n - Số nguyên dương
 * @param {number} k - Số nguyên dương
 * @returns {number} - Tổng các ước của n chia hết cho k
 */
function sumOfDivisors(n, k) {
    let sum = 0;

    // Duyệt qua các số từ 1 đến căn bậc hai của n
    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            // Nếu i là ước của n và chia hết cho k
            if (i % k === 0) {
                sum += i;
            }

            // Kiểm tra ước đối (n / i)
            let otherDivisor = n / i;
            if (otherDivisor !== i && otherDivisor % k === 0) {
                sum += otherDivisor;
            }
        }
    }

    return sum;
}

// Ví dụ sử dụng
console.log(sumOfDivisors(12, 2)); // Output: 18 (2 + 4 + 6 + 12)
console.log(sumOfDivisors(100, 5)); // Output: 105 (5 + 10 + 20 + 25 + 50 + 100)
console.log(sumOfDivisors(36, 3)); // Output: 63 (3 + 6 + 9 + 12 + 18 + 36)