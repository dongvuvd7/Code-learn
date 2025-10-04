/**
 * BÀI TOÁN: PERFECT RHOMBUS - HÌNH THOI HOÀN HẢO
 *
 * Định nghĩa hình thoi "hoàn hảo":
 * - Diện tích hình thoi là số "abundant" (số dồi dào)
 * - Số abundant: tổng các ước nguyên dương chính thức (không bao gồm chính nó) ≥ số đó
 *
 * Công thức:
 * - Diện tích hình thoi = (m × n) / 2 (với m, n là độ dài 2 đường chéo)
 * - Kiểm tra tính hợp lệ: m > 0 và n > 0
 * - Tìm tổng các ước của diện tích (không bao gồm chính nó)
 * - So sánh tổng ước với diện tích
 *
 * Ví dụ:
 * m = 10, n = 6 → diện tích = 30
 * Ước của 30: 1, 2, 3, 5, 6, 10, 15 (không bao gồm 30)
 * Tổng = 1+2+3+5+6+10+15 = 42 ≥ 30 → true
 */
function perfectRhombus(m, n) {
    // Kiểm tra độ dài hợp lệ
    if (m <= 0 || n <= 0) {
        return false;
    }

    // Tính diện tích hình thoi
    const area = (m * n) / 2;

    // Diện tích phải là số nguyên dương
    if (area !== Math.floor(area) || area <= 0) {
        return false;
    }

    // Hàm tính tổng các ước nguyên dương chính thức (không bao gồm chính số đó)
    function sumOfProperDivisors(num) {
        if (num <= 1) return 0;

        let sum = 1; // 1 luôn là ước của mọi số > 1

        // Duyệt từ 2 đến √num để tìm ước
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) {
                sum += i; // Thêm ước i

                // Nếu i không phải căn bậc hai của num, thêm ước tương ứng
                if (i !== num / i) {
                    sum += num / i;
                }
            }
        }

        return sum;
    }

    // Tính tổng các ước chính thức của diện tích
    const sumDivisors = sumOfProperDivisors(area);

    // Kiểm tra xem có phải số abundant không
    return sumDivisors >= area;
}

// Test với ví dụ đề bài
console.log("=== Test với ví dụ đề bài ===");
console.log(`perfectRhombus(10, 6) = ${perfectRhombus(10, 6)}`); // Expected: true

// Phân tích chi tiết ví dụ
console.log("\n=== Phân tích chi tiết ===");
function analyzeRhombus(m, n) {
    console.log(`\nPhân tích hình thoi với m = ${m}, n = ${n}:`);

    if (m <= 0 || n <= 0) {
        console.log("  Độ dài không hợp lệ → false");
        return false;
    }

    const area = (m * n) / 2;
    console.log(`  Diện tích = (${m} × ${n}) / 2 = ${area}`);

    if (area !== Math.floor(area)) {
        console.log("  Diện tích không phải số nguyên → false");
        return false;
    }

    function findDivisors(num) {
        let divisors = [];
        for (let i = 1; i < num; i++) {
            if (num % i === 0) {
                divisors.push(i);
            }
        }
        return divisors;
    }

    const divisors = findDivisors(area);
    const sumDivisors = divisors.reduce((sum, div) => sum + div, 0);

    console.log(`  Các ước chính thức của ${area}: [${divisors.join(", ")}]`);
    console.log(`  Tổng các ước = ${divisors.join(" + ")} = ${sumDivisors}`);
    console.log(
        `  ${sumDivisors} ${sumDivisors >= area ? "≥" : "<"} ${area} → ${sumDivisors >= area ? "true" : "false"}`
    );

    return sumDivisors >= area;
}

analyzeRhombus(10, 6);

// Thêm các test case khác
console.log("\n=== Test cases khác ===");

// Test case 2: Diện tích không phải số abundant
console.log("Test 2:");
analyzeRhombus(4, 2); // Diện tích = 4, ước: [1, 2], tổng = 3 < 4 → false

// Test case 3: Số perfect (tổng ước = chính nó)
console.log("Test 3:");
analyzeRhombus(6, 2); // Diện tích = 6, ước: [1, 2, 3], tổng = 6 = 6 → true

// Test case 4: Diện tích không nguyên
console.log("Test 4:");
console.log(`perfectRhombus(3, 2) = ${perfectRhombus(3, 2)}`); // Diện tích = 3 → false (diện tích không nguyên)

// Test case 5: Độ dài không hợp lệ
console.log("Test 5:");
console.log(`perfectRhombus(-5, 10) = ${perfectRhombus(-5, 10)}`); // false
console.log(`perfectRhombus(0, 8) = ${perfectRhombus(0, 8)}`); // false

// Test một số trường hợp đặc biệt
console.log("\n=== Test số abundant nổi tiếng ===");

// Số abundant nhỏ nhất là 12
analyzeRhombus(6, 4); // Diện tích = 12

// Số abundant tiếp theo là 18
analyzeRhombus(9, 4); // Diện tích = 18

// Số abundant tiếp theo là 20
analyzeRhombus(10, 4); // Diện tích = 20

// Export function
module.exports = perfectRhombus;
