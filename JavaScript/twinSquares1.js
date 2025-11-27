/**
 * BÀI TOÁN: TWIN SQUARES - CẶP CHÍNH PHƯƠNG SINH ĐÔI
 *
 * Mô tả: Tìm cặp số chính phương sinh đôi thứ n
 *        Cặp chính phương sinh đôi: 2 số chính phương liên tiếp mà hiệu cũng là số chính phương
 *
 * Ví dụ: (16, 25) là cặp chính phương sinh đôi
 * - 16 = 4²
 * - 25 = 5²
 * - 25 - 16 = 9 = 3² (hiệu cũng là số chính phương)
 *
 * Phân tích toán học:
 * - Giả sử a², b² là 2 số chính phương liên tiếp (b = a + 1)
 * - Hiệu: b² - a² = (a+1)² - a² = 2a + 1
 * - Để 2a + 1 là số chính phương: 2a + 1 = k²
 * - => a = (k² - 1)/2
 *
 * Pattern:
 * - k = 3: a = 4, b = 5 → (16, 25)
 * - k = 5: a = 12, b = 13 → (144, 169)
 * - k = 7: a = 24, b = 25 → (576, 625)
 * - k luôn là số lẻ: k = 2n + 1
 */
function twinSquares1(n) {
    // Công thức: k = 2n + 1
    const k = 2 * n + 1;

    // Tính a = (k² - 1) / 2
    const a = (k * k - 1) / 2;

    // b = a + 1
    const b = a + 1;

    // Trả về cặp [a², b²]
    return [a * a, b * b];
}

// Test cases
console.log("Test 1: twinSquares1(1) =", twinSquares1(1));
// Expected: [16, 25]
// k = 3, a = 4, b = 5

console.log("Test 2: twinSquares1(2) =", twinSquares1(2));
// Expected: [144, 169]
// k = 5, a = 12, b = 13

console.log("Test 3: twinSquares1(3) =", twinSquares1(3));
// Expected: [576, 625]
// k = 7, a = 24, b = 25

console.log("Test 4: twinSquares1(4) =", twinSquares1(4));
// Expected: [1600, 1681]
// k = 9, a = 40, b = 41

console.log("Test 5: twinSquares1(5) =", twinSquares1(5));
// Expected: [3600, 3721]
// k = 11, a = 60, b = 61

// Kiểm tra tính đúng đắn
function verify(n) {
    const [a2, b2] = twinSquares1(n);
    const a = Math.sqrt(a2);
    const b = Math.sqrt(b2);
    const diff = b2 - a2;
    const k = Math.sqrt(diff);

    console.log(`\nVerify n=${n}:`);
    console.log(`  a² = ${a2} = ${a}²`);
    console.log(`  b² = ${b2} = ${b}²`);
    console.log(`  Hiệu = ${diff} = ${k}²`);
    console.log(`  b - a = ${b - a} (phải = 1)`);
    console.log(`  √${diff} = ${k} (phải là số nguyên)`);
}

verify(1);
verify(2);
verify(3);

module.exports = twinSquares1;
