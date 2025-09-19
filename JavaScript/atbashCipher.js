/**
 * Giải mã chuỗi sử dụng thuật toán Atbash Cipher
 *
 * Bài toán: Atbash là mã thay thế đối xứng trong bảng chữ cái:
 * - Chữ cái đầu ↔ Chữ cái cuối: A↔Z, B↔Y, C↔X, ...
 * - Tương tự cho chữ thường: a↔z, b↔y, c↔x, ...
 *
 * Thuật toán:
 * 1. Duyệt từng ký tự trong chuỗi
 * 2. Với chữ hoa: newChar = 'Z' - (char - 'A')
 * 3. Với chữ thường: newChar = 'z' - (char - 'a')
 * 4. Giữ nguyên các ký tự khác (nếu có)
 *
 * Công thức: vị_trí_mới = 25 - vị_trí_cũ
 *
 * Ví dụ: "zyxabc" → "abczyx"
 * - z(25)→a(0), y(24)→b(1), x(23)→c(2)
 * - a(0)→z(25), b(1)→y(24), c(2)→x(23)
 *
 * @param {string} message - Chuỗi cần giải mã (0 ≤ length ≤ 5×10^6)
 * @returns {string} - Chuỗi sau khi áp dụng Atbash cipher
 */
function atbashCipher(message) {
    return message
        .split("") // Tách chuỗi thành mảng ký tự
        .map((char) => {
            // Xử lý chữ cái in hoa (A-Z)
            if (char >= "A" && char <= "Z") {
                // Công thức: Z - (char - A) = Z - char + A
                // Tương đương: 'Z'.charCode - (char.charCode - 'A'.charCode)
                return String.fromCharCode("Z".charCodeAt(0) - (char.charCodeAt(0) - "A".charCodeAt(0)));
            }
            // Xử lý chữ cái thường (a-z)
            else if (char >= "a" && char <= "z") {
                // Công thức tương tự với chữ thường: z - (char - a)
                return String.fromCharCode("z".charCodeAt(0) - (char.charCodeAt(0) - "a".charCodeAt(0)));
            }
            // Giữ nguyên các ký tự không phải chữ cái
            return char;
        })
        .join(""); // Ghép mảng ký tự thành chuỗi
}
