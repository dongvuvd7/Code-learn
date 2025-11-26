/**
 * BÀI TOÁN: SUM PRIME - TỔNG CÁC SỐ NGUYÊN TỐ TRONG XÂU CON
 *
 * Mô tả: Tìm tất cả xâu con của chuỗi s, kiểm tra xem có phải số nguyên tố không
 *        và tính tổng các số nguyên tố tìm được
 *
 * Ví dụ: s = "1234"
 * - Xâu con: "2", "3", "23" là số nguyên tố
 * - Tổng: 2 + 3 + 23 = 28
 *
 * CÁCH GIẢI:
 * 1. Sinh tất cả xâu con của s
 * 2. Chuyển xâu con thành số và kiểm tra nguyên tố
 * 3. Dùng Set để tránh đếm trùng
 * 4. Tính tổng các số nguyên tố
 */
function sumPrime(s) {
    // Kiểm tra chuỗi rỗng
    if (!s || s.length === 0) return -1;

    // Set để lưu các số nguyên tố duy nhất (tránh trùng lặp)
    const primeSet = new Set();

    // Hàm kiểm tra số nguyên tố
    function isPrime(n) {
        if (n < 2) return false;
        if (n === 2) return true;
        if (n % 2 === 0) return false;

        // Kiểm tra từ 3 đến √n
        for (let i = 3; i * i <= n; i += 2) {
            if (n % i === 0) return false;
        }
        return true;
    }

    // Sinh tất cả xâu con và kiểm tra
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            const substring = s.slice(i, j);

            // Bỏ qua xâu bắt đầu bằng 0 (trừ số 0)
            if (substring[0] === "0" && substring.length > 1) continue;

            const num = parseInt(substring, 10);

            // Kiểm tra số có vượt quá Number.MAX_SAFE_INTEGER không
            if (num > Number.MAX_SAFE_INTEGER) continue;

            // Nếu là số nguyên tố, thêm vào set
            if (isPrime(num)) {
                primeSet.add(num);
            }
        }
    }

    // Nếu không tìm thấy số nguyên tố nào
    if (primeSet.size === 0) return -1;

    // Tính tổng các số nguyên tố
    let sum = 0;
    for (let prime of primeSet) {
        sum += prime;
    }

    return sum;
}

// Test cases
console.log('Test 1: sumPrime("1234") =', sumPrime("1234"));
// Expected: 28 (2 + 3 + 23)

console.log('Test 2: sumPrime("11") =', sumPrime("11"));
// Expected: 11 (chỉ có số 11)

console.log('Test 3: sumPrime("0") =', sumPrime("0"));
// Expected: -1 (không có số nguyên tố)

console.log('Test 4: sumPrime("123") =', sumPrime("123"));
// Expected: 28 (2 + 3 + 23)

console.log('Test 5: sumPrime("2357") =', sumPrime("2357"));
// Expected: 2 + 3 + 5 + 7 + 23 + 57 + 37 + ... (tất cả số nguyên tố)

console.log('Test 6: sumPrime("468") =', sumPrime("468"));
// Expected: -1 (không có số nguyên tố)

console.log('Test 7: sumPrime("") =', sumPrime(""));
// Expected: -1 (chuỗi rỗng)

module.exports = sumPrime;
