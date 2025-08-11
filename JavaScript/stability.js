/**
 * Tìm độ ổn định của dãy số được định nghĩa bởi s(x)
 *
 * Định nghĩa:
 * - s(x) = tổng các chữ số của tất cả các ước của x
 * - Dãy: a1 = x, a2 = s(x), a3 = s(s(x)), ...
 * - Dãy ổn định nếu tồn tại i sao cho ai = ai+1
 *
 * @param {number} x - Số nguyên dương (1 ≤ x ≤ 10^9)
 * @returns {number} Vị trí i nhỏ nhất thỏa mãn ai = ai+1, hoặc -1 nếu không ổn định sau 1000 lần
 *
 * Ví dụ: x = 11
 * - Ước của 11: [1, 11] → s(11) = 1 + 1 + 1 = 3
 * - Ước của 3: [1, 3] → s(3) = 1 + 3 = 4
 * - Ước của 4: [1, 2, 4] → s(4) = 1 + 2 + 4 = 7
 * - Ước của 7: [1, 7] → s(7) = 1 + 7 = 8
 * - Ước của 8: [1, 2, 4, 8] → s(8) = 1 + 2 + 4 + 8 = 15
 * - Ước của 15: [1, 3, 5, 15] → s(15) = 1 + 3 + 5 + 1 + 5 = 15
 * → ai = ai+1 tại i = 6
 */
function stability(x) {
    /**
     * Tìm tất cả các ước của một số
     * @param {number} num - Số cần tìm ước
     * @returns {Array} Mảng chứa tất cả các ước
     */
    function findDivisors(num) {
        const divisors = [];
        const sqrt = Math.sqrt(num);

        for (let i = 1; i <= sqrt; i++) {
            if (num % i === 0) {
                divisors.push(i);
                // Tránh thêm căn bậc hai hai lần (ví dụ: 4 có ước 2)
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
     * Tính s(x) = tổng các chữ số của tất cả các ước của x
     * @param {number} num - Số cần tính s(num)
     * @returns {number} Tổng các chữ số của tất cả các ước
     */
    function calculateS(num) {
        const divisors = findDivisors(num);
        let totalSum = 0;

        for (const divisor of divisors) {
            totalSum += sumOfDigits(divisor);
        }

        return totalSum;
    }

    let current = x;
    const maxIterations = 1000;

    // Tạo dãy và kiểm tra tính ổn định
    for (let i = 1; i <= maxIterations; i++) {
        const next = calculateS(current);

        // Kiểm tra nếu ai = ai+1
        if (current === next) {
            return i;
        }

        current = next;
    }

    // Nếu sau 1000 lần vẫn chưa ổn định
    return -1;
}

// Kiểm tra với ví dụ đã cho
console.log("Kiểm tra hàm stability:");
console.log(`stability(11) = ${stability(11)}`); // Kết quả mong đợi: 6

// Các test case bổ sung
console.log(`stability(1) = ${stability(1)}`); // s(1) = 1 → ổn định ngay lập tức
console.log(`stability(6) = ${stability(6)}`); // s(6) = 1+2+3+6 = 12
console.log(`stability(10) = ${stability(10)}`); // s(10) = 1+2+5+1+0 = 9
console.log(`stability(20) = ${stability(20)}`); // Test case thêm
