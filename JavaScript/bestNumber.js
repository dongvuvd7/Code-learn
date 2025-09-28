/**
 * BÀI TOÁN: BEST NUMBER - TÌM SỐ NGUYÊN TỐ TỐT NHẤT
 *
 * Định nghĩa "số a tốt hơn b":
 * - Tổng bình phương các chữ số của a > tổng bình phương các chữ số của b, HOẶC
 * - Tổng bình phương bằng nhau nhưng a < b
 *
 * Yêu cầu: Tìm số nguyên tố tốt nhất trong khoảng [l, r]
 *
 * CÁCH GIẢI:
 * 1. Kiểm tra tất cả số trong khoảng [l, r]
 * 2. Lọc ra các số nguyên tố
 * 3. So sánh theo tiêu chí "tốt hơn" để tìm số tốt nhất
 *
 * Ví dụ: [5, 13] → các số nguyên tố: 5, 7, 11, 13
 * - 5: 5² = 25
 * - 7: 7² = 49 (tốt nhất)
 * - 11: 1² + 1² = 2
 * - 13: 1² + 3² = 10
 */
function bestNumber(l, r) {
    // Hàm kiểm tra số nguyên tố
    function isPrime(n) {
        if (n < 2) return false;
        if (n === 2) return true;
        if (n % 2 === 0) return false;

        for (let i = 3; i * i <= n; i += 2) {
            if (n % i === 0) return false;
        }
        return true;
    }

    // Hàm tính tổng bình phương các chữ số
    function sumOfSquares(num) {
        let sum = 0;
        while (num > 0) {
            let digit = num % 10;
            sum += digit * digit;
            num = Math.floor(num / 10);
        }
        return sum;
    }

    // Hàm so sánh: a tốt hơn b?
    function isBetter(a, b) {
        let sumA = sumOfSquares(a);
        let sumB = sumOfSquares(b);

        // a tốt hơn b nếu:
        // 1. Tổng bình phương của a > tổng bình phương của b, HOẶC
        // 2. Tổng bình phương bằng nhau nhưng a < b
        return sumA > sumB || (sumA === sumB && a < b);
    }

    let bestPrime = -1;

    // Duyệt tất cả số trong khoảng [l, r]
    for (let num = l; num <= r; num++) {
        if (isPrime(num)) {
            if (bestPrime === -1 || isBetter(num, bestPrime)) {
                bestPrime = num;
            }
        }
    }

    return bestPrime;
}

// Test với ví dụ đề bài
console.log("Test case: bestNumber(5, 13) =", bestNumber(5, 13)); // Kết quả mong đợi: 7

// Thêm một số test case khác
console.log("Test case: bestNumber(2, 10) =", bestNumber(2, 10));
console.log("Test case: bestNumber(10, 20) =", bestNumber(10, 20));
console.log("Test case: bestNumber(20, 30) =", bestNumber(20, 30));

// Kiểm tra chi tiết cho khoảng [5, 13]
console.log("\n=== Chi tiết phân tích [5, 13] ===");
function analyzeRange(l, r) {
    function isPrime(n) {
        if (n < 2) return false;
        if (n === 2) return true;
        if (n % 2 === 0) return false;
        for (let i = 3; i * i <= n; i += 2) {
            if (n % i === 0) return false;
        }
        return true;
    }

    function sumOfSquares(num) {
        let sum = 0;
        while (num > 0) {
            let digit = num % 10;
            sum += digit * digit;
            num = Math.floor(num / 10);
        }
        return sum;
    }

    for (let num = l; num <= r; num++) {
        if (isPrime(num)) {
            console.log(`Số ${num}: tổng bình phương = ${sumOfSquares(num)}`);
        }
    }
}

analyzeRange(5, 13);

// Export function
module.exports = bestNumber;
