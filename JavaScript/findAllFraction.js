/**
 * BÀI TOÁN: FIND ALL FRACTION - TÌM TẤT CẢ PHÂN SỐ TỐI GIẢN
 *
 * Mô tả: Tìm tất cả phân số tối giản trong [0, 1] với mẫu số ≤ n
 *        và sắp xếp theo thứ tự tăng dần
 *
 * Ví dụ: n = 5
 * - Phân số: 0/1, 1/5, 1/4, 1/3, 2/5, 1/2, 3/5, 2/3, 3/4, 4/5, 1/1
 * - Tối giản và sắp xếp: 0/1, 1/5, 1/4, 1/3, 2/5, 1/2, 3/5, 2/3, 3/4, 4/5, 1/1
 *
 * CÁCH GIẢI:
 * 1. Sinh tất cả phân số p/q với 0 ≤ p ≤ q ≤ n
 * 2. Kiểm tra phân số tối giản: gcd(p, q) = 1
 * 3. Sắp xếp theo giá trị tăng dần
 * 4. Loại bỏ trùng lặp
 */
function findAllFraction(n) {
    // Hàm tính GCD (Greatest Common Divisor)
    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    // Mảng lưu các phân số dưới dạng {numerator, denominator, value}
    const fractions = [];

    // Sinh tất cả phân số
    for (let denominator = 1; denominator <= n; denominator++) {
        for (let numerator = 0; numerator <= denominator; numerator++) {
            // Kiểm tra phân số tối giản
            if (gcd(numerator, denominator) === 1) {
                fractions.push({
                    numerator: numerator,
                    denominator: denominator,
                    value: numerator / denominator,
                });
            }
        }
    }

    // Sắp xếp theo giá trị tăng dần
    fractions.sort((a, b) => a.value - b.value);

    // Loại bỏ trùng lặp và chuyển thành string
    const result = [];
    const seen = new Set();

    for (let frac of fractions) {
        const key = `${frac.numerator}/${frac.denominator}`;
        const valueKey = frac.value.toFixed(10); // Dùng để so sánh giá trị

        if (!seen.has(valueKey)) {
            seen.add(valueKey);
            result.push(key);
        }
    }

    return result;
}

// Test cases
console.log("Test 1: findAllFraction(5) =", findAllFraction(5));
// Expected: ["0/1", "1/5", "1/4", "1/3", "2/5", "1/2", "3/5", "2/3", "3/4", "4/5", "1/1"]

console.log("Test 2: findAllFraction(1) =", findAllFraction(1));
// Expected: ["0/1", "1/1"]

console.log("Test 3: findAllFraction(3) =", findAllFraction(3));
// Expected: ["0/1", "1/3", "1/2", "2/3", "1/1"]

console.log("Test 4: findAllFraction(4) =", findAllFraction(4));
// Expected: ["0/1", "1/4", "1/3", "1/2", "2/3", "3/4", "1/1"]

module.exports = findAllFraction;
