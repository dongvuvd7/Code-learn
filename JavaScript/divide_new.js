/**
 * BÀI TOÁN: JOHNNY AND ANCIENT COMPUTER
 *
 * Mô tả: Tìm số thao tác tối thiểu để biến a thành b
 *        Mỗi thao tác có thể: ×2, ×4, ×8, ÷2, ÷4, ÷8
 *
 * Ví dụ:
 * - a=6, b=12 → 1 thao tác (×2)
 * - a=7, b=15 → -1 (không thể)
 *
 * CÁCH GIẢI:
 * 1. Kiểm tra điều kiện: b/a hoặc a/b phải là lũy thừa của 2
 * 2. Tính số bit cần shift
 * 3. Chia nhóm: mỗi thao tác shift tối đa 3 bit (×8 hoặc ÷8)
 */
function divide(a, b) {
    // Trường hợp đặc biệt: a = b
    if (a === b) return 0;

    // Xác định số lớn hơn và số nhỏ hơn
    let larger = a > b ? a : b;
    let smaller = a > b ? b : a;

    // Kiểm tra larger có chia hết cho smaller không
    if (larger % smaller !== 0) return -1;

    let ratio = larger / smaller;

    // Kiểm tra ratio có phải là lũy thừa của 2 không
    // Lũy thừa của 2 chỉ có 1 bit được set
    if ((ratio & (ratio - 1)) !== 0) return -1;

    // Đếm số bit cần shift (số lần nhân/chia cho 2)
    let shiftCount = 0;
    while (ratio > 1) {
        ratio /= 2;
        shiftCount++;
    }

    // Mỗi thao tác có thể shift tối đa 3 bit (×8 hoặc ÷8)
    // Chia nhóm: 3 bit, 3 bit, 3 bit,...
    let operations = Math.floor(shiftCount / 3);
    if (shiftCount % 3 !== 0) {
        operations++; // Thêm 1 thao tác cho phần dư
    }

    return operations;
}

// Test cases
console.log("Test 1: divide(6, 12) =", divide(6, 12));
// Expected: 1 (6 × 2 = 12)

console.log("Test 2: divide(7, 15) =", divide(7, 15));
// Expected: -1 (không thể)

console.log("Test 3: divide(12, 6) =", divide(12, 6));
// Expected: 1 (12 ÷ 2 = 6)

console.log("Test 4: divide(1, 8) =", divide(1, 8));
// Expected: 1 (1 × 8 = 8)

console.log("Test 5: divide(1, 16) =", divide(1, 16));
// Expected: 2 (1 × 8 × 2 = 16, hoặc 1 × 4 × 4 = 16)

console.log("Test 6: divide(5, 20) =", divide(5, 20));
// Expected: 2 (5 × 4 = 20)

console.log("Test 7: divide(100, 100) =", divide(100, 100));
// Expected: 0

console.log("Test 8: divide(1, 1024) =", divide(1, 1024));
// Expected: 4 (1024 = 2^10, cần 10 bit shift, chia thành 3+3+3+1)

module.exports = divide;
