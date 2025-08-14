/**
 * Tìm số nguyên tố thứ k cho mỗi phần tử trong mảng
 *
 * Bài toán: Với mỗi a[i], tìm số nguyên tố thứ a[i] trong dãy số nguyên tố.
 * Dãy số nguyên tố: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, ...
 *
 * Thuật toán:
 * 1. Pre-compute tất cả số nguyên tố cần thiết bằng Sieve of Eratosthenes
 * 2. Lưu trữ trong mảng PRIMES để truy xuất O(1)
 * 3. Với mỗi a[i], trả về PRIMES[a[i] - 1]
 *
 * Ví dụ: a = [3, 2, 5, 7] → [5, 3, 11, 17]
 */

// Pre-compute tất cả số nguyên tố cần thiết (chạy một lần khi load module)
const PRIMES = (() => {
    const limit = 200000; // Đủ lớn để chứa 15000 số nguyên tố đầu tiên

    // Khởi tạo mảng đánh dấu số nguyên tố (Sieve of Eratosthenes)
    const isPrime = new Array(limit + 1).fill(true);
    isPrime[0] = isPrime[1] = false; // 0 và 1 không phải số nguyên tố

    // Sàng Eratosthenes: loại bỏ các hợp số
    for (let i = 2; i * i <= limit; i++) {
        if (isPrime[i]) {
            // Đánh dấu tất cả bội số của i (bắt đầu từ i²)
            for (let j = i * i; j <= limit; j += i) {
                isPrime[j] = false;
            }
        }
    }

    // Thu thập các số nguyên tố vào mảng
    const primes = [];
    for (let i = 2; i <= limit && primes.length < 15000; i++) {
        if (isPrime[i]) {
            primes.push(i);
        }
    }

    return primes;
})();

/**
 * Tìm số nguyên tố thứ k cho mỗi phần tử trong mảng
 * @param {number[]} a - Mảng các chỉ số cần tìm (1 ≤ a[i] ≤ 15000)
 * @returns {number[]} - Mảng các số nguyên tố tương ứng
 */
function orderPrime(a) {
    // Với mỗi index trong a, trả về số nguyên tố thứ index
    // (index - 1 vì mảng PRIMES bắt đầu từ chỉ số 0)
    return a.map((index) => PRIMES[index - 1]);
}
