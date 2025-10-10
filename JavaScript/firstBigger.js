/**
 * BÀI TOÁN: FIRST BIGGER - SỐ NGUYÊN NHỎ NHẤT LỚN HƠN B CHIA HẾT CHO A
 *
 * Mục tiêu: Tìm số nguyên nhỏ nhất > b mà chia hết cho a
 *
 * Công thức toán học:
 * - Nếu (b + 1) chia hết cho a → kết quả = b + 1
 * - Ngược lại: kết quả = ((b ÷ a) + 1) × a
 *
 * Ví dụ:
 * - a = 2, b = 9 → (9 ÷ 2) = 4 dư 1 → ((4 + 1) × 2) = 10
 * - a = 3, b = 6 → 6 chia hết cho 3 → 6 + 3 = 9
 *
 * CÁCH GIẢI TOÁN HỌC:
 * result = Math.floor(b / a) * a + a = (Math.floor(b / a) + 1) * a
 */
function firstBigger(a, b) {
    // Công thức toán học: tìm bội của a nhỏ nhất lớn hơn b
    return Math.floor(b / a) * a + a;
}

module.exports = firstBigger;
