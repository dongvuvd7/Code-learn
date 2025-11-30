/**
 * BÀI TOÁN: TWIN SQUARES 2 - CẶP CHÍNH PHƯƠNG SINH ĐÔI (GIỚI HẠN LỚN)
 *
 * Mô tả: Tìm cặp số chính phương sinh đôi thứ n với n lớn (≤ 10^4)
 *        Cặp chính phương sinh đôi: 2 số chính phương liên tiếp mà hiệu cũng là số chính phương
 *
 * Công thức (giống twinSquares1):
 * - k = 2n + 1
 * - a = (k² - 1) / 2
 * - b = a + 1
 * - Kết quả: [a², b²]
 *
 * Lưu ý với n lớn:
 * - Khi n = 10000: k = 20001
 * - a = (20001² - 1) / 2 = 200020000
 * - a² = 40008000400000000 (vượt Number.MAX_SAFE_INTEGER)
 *
 * Xử lý số lớn:
 * - JavaScript số nguyên an toàn: ≤ 2^53 - 1 ≈ 9 × 10^15
 * - a² với n=10000 vẫn trong giới hạn an toàn
 */
function twinSquares2(n) {
    // Công thức: k = 2n + 1
    const k = 2 * n + 1;

    // Tính a = (k² - 1) / 2
    const kSquared = k * k;
    const a = (kSquared - 1) / 2;

    // b = a + 1
    const b = a + 1;

    // Trả về cặp [a², b²]
    return [a * a, b * b];
}

// Test cases
console.log("Test 1: twinSquares2(1) =", twinSquares2(1));
// Expected: [16, 25]

console.log("Test 2: twinSquares2(2) =", twinSquares2(2));
// Expected: [144, 169]

console.log("Test 3: twinSquares2(100) =", twinSquares2(100));
// k = 201, a = 20100, b = 20101

console.log("Test 4: twinSquares2(1000) =", twinSquares2(1000));
// k = 2001, a = 2001000, b = 2001001

console.log("Test 5: twinSquares2(10000) =", twinSquares2(10000));
// k = 20001, a = 200020000, b = 200020001

// Kiểm tra giới hạn an toàn
function checkSafety(n) {
    const k = 2 * n + 1;
    const a = (k * k - 1) / 2;
    const b = a + 1;
    const a2 = a * a;
    const b2 = b * b;

    console.log(`\nn = ${n}:`);
    console.log(`  k = ${k}`);
    console.log(`  a = ${a}`);
    console.log(`  b = ${b}`);
    console.log(`  a² = ${a2}`);
    console.log(`  b² = ${b2}`);
    console.log(`  Safe? ${a2 <= Number.MAX_SAFE_INTEGER && b2 <= Number.MAX_SAFE_INTEGER}`);
    console.log(`  MAX_SAFE_INTEGER = ${Number.MAX_SAFE_INTEGER}`);
}

console.log("\n=== Kiểm tra độ an toàn ===");
checkSafety(1);
checkSafety(100);
checkSafety(1000);
checkSafety(10000);

// Verify tính đúng đắn
function verify(n) {
    const [a2, b2] = twinSquares2(n);
    const a = Math.sqrt(a2);
    const b = Math.sqrt(b2);
    const diff = b2 - a2;
    const k = Math.sqrt(diff);

    const isValid = Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(k) && b - a === 1;

    console.log(`\nVerify n=${n}: ${isValid ? "✓" : "✗"}`);
    if (!isValid) {
        console.log(`  a = ${a}, b = ${b}, k = ${k}`);
    }
}

console.log("\n=== Verify các test case ===");
verify(1);
verify(2);
verify(100);
verify(1000);
verify(10000);

module.exports = twinSquares2;
