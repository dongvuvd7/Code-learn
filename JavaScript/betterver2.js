/**
 * Tìm ước số "tốt nhất" của n
 *
 * Định nghĩa "tốt hơn":
 * - Số a tốt hơn số b nếu tổng chữ số của a > tổng chữ số của b
 * - Nếu tổng chữ số bằng nhau, số nhỏ hơn được coi là tốt hơn
 *
 * @param {number} n - Số nguyên dương (1 ≤ n ≤ 10^5)
 * @returns {number} Ước số tốt nhất của n
 *
 * Ví dụ: n = 100
 * - Ước của 100: [1, 2, 4, 5, 10, 20, 25, 50, 100]
 * - Tổng chữ số: [1, 2, 4, 5, 1, 2, 7, 5, 1]
 * - Ước có tổng chữ số lớn nhất (7): 25
 * → Trả về 25
 */
function betterver2(n) {
    /**
     * Tìm tất cả các ước của một số
     * @param {number} num - Số cần tìm ước
     * @returns {Array} Mảng chứa tất cả các ước được sắp xếp tăng dần
     */
    function findDivisors(num) {
        const divisors = [];
        const sqrt = Math.sqrt(num);

        for (let i = 1; i <= sqrt; i++) {
            if (num % i === 0) {
                divisors.push(i);
                // Tránh thêm căn bậc hai hai lần (ví dụ: 9 có ước 3)
                if (i !== num / i) {
                    divisors.push(num / i);
                }
            }
        }

        return divisors.sort((a, b) => a - b);
    }

    /**
     * Tính tổng các chữ số của một số
     * @param {number} num - Số cần tính tổng chữ số
     * @returns {number} Tổng các chữ số
     */
    function sumOfDigits(num) {
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        return sum;
    }

    /**
     * So sánh hai số theo tiêu chí "tốt hơn"
     * @param {number} a - Số thứ nhất
     * @param {number} b - Số thứ hai
     * @returns {boolean} true nếu a tốt hơn b
     */
    function isBetter(a, b) {
        const sumA = sumOfDigits(a);
        const sumB = sumOfDigits(b);

        // Ưu tiên 1: Tổng chữ số lớn hơn
        if (sumA !== sumB) {
            return sumA > sumB;
        }

        // Ưu tiên 2: Nếu tổng chữ số bằng nhau, số nhỏ hơn tốt hơn
        return a < b;
    }

    // Tìm tất cả các ước của n
    const divisors = findDivisors(n);

    // Tìm ước tốt nhất
    let bestDivisor = divisors[0];

    for (let i = 1; i < divisors.length; i++) {
        if (isBetter(divisors[i], bestDivisor)) {
            bestDivisor = divisors[i];
        }
    }

    return bestDivisor;
}

// Kiểm tra với ví dụ đã cho
console.log("Kiểm tra hàm betterver2:");
console.log(`betterver2(100) = ${betterver2(100)}`); // Kết quả mong đợi: 25

// Kiểm tra với ví dụ đã cho
console.log("Kiểm tra hàm betterver2:");
console.log(`betterver2(100) = ${betterver2(100)}`); // Kết quả mong đợi: 25

// Các test case bổ sung
console.log(`betterver2(12) = ${betterver2(12)}`); // Ước có tổng chữ số lớn nhất: 6
console.log(`betterver2(15) = ${betterver2(15)}`); // Ước có tổng chữ số lớn nhất: 15 (tổng = 6)
console.log(`betterver2(1) = ${betterver2(1)}`); // Chỉ có ước 1
console.log(`betterver2(7) = ${betterver2(7)}`); // Ước: [1,7] → 7 có tổng chữ số lớn hơn
console.log(`betterver2(36) = ${betterver2(36)}`); // Test case thêm
