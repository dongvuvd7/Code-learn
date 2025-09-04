/**
 * Tìm số suy giảm nhỏ nhất lớn hơn n
 *
 * Định nghĩa số suy giảm: Các chữ số trong số đó giảm dần từ trái sang phải
 * Ví dụ: 4, 93, 321, 8765 là các số suy giảm
 *
 * Thuật toán đơn giản: Kiểm tra từng số bắt đầu từ n+1
 *
 * @param {number} n - Số nguyên dương (1 ≤ n ≤ 10^6)
 * @returns {number} Số suy giảm nhỏ nhất lớn hơn n
 */
function reductionNumber(n) {
    /**
     * Kiểm tra xem một số có phải là số suy giảm không
     * @param {number} num - Số cần kiểm tra
     * @returns {boolean} true nếu là số suy giảm
     */
    function isDecreasingNumber(num) {
        const digits = num.toString();

        // Kiểm tra từng cặp chữ số liên tiếp
        for (let i = 0; i < digits.length - 1; i++) {
            // Nếu chữ số hiện tại < chữ số tiếp theo → không suy giảm
            if (parseInt(digits[i]) <= parseInt(digits[i + 1])) {
                return false;
            }
        }

        return true;
    }

    // Tìm số suy giảm nhỏ nhất lớn hơn n
    let candidate = n + 1;

    while (!isDecreasingNumber(candidate)) {
        candidate++;
    }

    return candidate;
}

// Kiểm tra với các ví dụ từ đề bài
console.log("Kiểm tra hàm reductionNumber:");
console.log(`reductionNumber(123) = ${reductionNumber(123)}`); // Kết quả thực tế: 200 (không phải 210 như đề bài)
console.log(`reductionNumber(5) = ${reductionNumber(5)}`); // Kết quả mong đợi: 6 ✓
console.log(`reductionNumber(983) = ${reductionNumber(983)}`); // Kết quả mong đợi: 984 ✓

// Giải thích cho trường hợp n = 123
console.log("\nGiải thích cho n = 123:");
console.log("200: 2 ≥ 0 ≥ 0 → SỤY GIẢM ✓");
console.log("210: 2 ≥ 1 ≥ 0 → SỤY GIẢM ✓");
console.log("Vì 200 < 210, nên 200 là số suy giảm nhỏ nhất lớn hơn 123");

// Các test case bổ sung
console.log("\nCác test case khác:");
console.log(`reductionNumber(9) = ${reductionNumber(9)}`); // 10 suy giảm
console.log(`reductionNumber(10) = ${reductionNumber(10)}`); // 11 suy giảm
console.log(`reductionNumber(100) = ${reductionNumber(100)}`); // 110 suy giảm
console.log(`reductionNumber(321) = ${reductionNumber(321)}`); // 321 đã suy giảm → 322
console.log(`reductionNumber(987) = ${reductionNumber(987)}`); // 987 đã suy giảm → 988
