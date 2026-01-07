/**
 * BÀI TOÁN: FACTORIAL PRIME DIVISOR - ƯỚC NGUYÊN TỐ CỦA GIAI THỪA
 *
 * Mục tiêu:
 * - Đếm số ước nguyên tố khác nhau của n!
 *
 * Phân tích:
 * - n! = 1 × 2 × 3 × 4 × ... × n
 * - Các ước nguyên tố của n! = tất cả số nguyên tố ≤ n
 *
 * Giải thích:
 * - Nếu p là số nguyên tố và p ≤ n
 * - Thì p xuất hiện trong tích → p là ước của n!
 * - Nếu p > n → p không xuất hiện → p không phải ước
 *
 * Ví dụ:
 * n = 5
 * 5! = 120 = 2³ × 3 × 5
 * Số nguyên tố ≤ 5: {2, 3, 5} → 3 số
 *
 * CÁCH GIẢI:
 * - Đếm số lượng số nguyên tố từ 2 đến n
 * - Sử dụng Sàng Eratosthenes
 */
function factorialPrimeDivisor(n) {
    if (n < 2) {
        return 0; // Không có số nguyên tố < 2
    }

    // Sàng Eratosthenes để tìm số nguyên tố
    const isPrime = new Array(n + 1).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;

    // Sàng các hợp số
    for (let i = 2; i * i <= n; i++) {
        if (isPrime[i]) {
            // Đánh dấu các bội của i là hợp số
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    // Đếm số lượng số nguyên tố
    let count = 0;
    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) {
            count++;
        }
    }

    return count;
}

module.exports = factorialPrimeDivisor;
