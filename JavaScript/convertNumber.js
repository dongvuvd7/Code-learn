/**
 * BÀI TOÁN: CONVERT NUMBER - CHUYỂN ĐỔI SỐ THÀNH CHỮ CÁI
 *
 * Bảng mã hóa:
 * 0→A, 1→B, 2→C, 3→D, 4→E, 5→F, 6→G, 7→H, 8→I, 9→K
 *
 * Ví dụ:
 * - n = 10 → "BA" (1→B, 0→A)
 * - n = 123 → "BCD" (1→B, 2→C, 3→D)
 *
 * CÁCH GIẢI:
 * 1. Chuyển số thành chuỗi để duyệt từng chữ số
 * 2. Với mỗi chữ số, tra cứu ký tự tương ứng trong bảng mã
 * 3. Ghép các ký tự lại thành chuỗi kết quả
 */
function convertNumber(n) {
    // Bảng mã hóa từ chữ số sang chữ cái
    const mapping = "ABCDEFGHIK";

    // Chuyển số thành chuỗi để duyệt từng chữ số
    const digits = n.toString();

    let result = "";

    // Duyệt từng chữ số và chuyển đổi
    for (let i = 0; i < digits.length; i++) {
        const digit = parseInt(digits[i]);
        result += mapping[digit];
    }

    return result;
}

module.exports = convertNumber;
