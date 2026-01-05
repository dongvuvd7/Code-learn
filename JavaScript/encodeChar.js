/**
 * BÀI TOÁN: ENCODE CHAR - MÃ HÓA KÝ TỰ
 *
 * Quy tắc mã hóa:
 * - Ký tự in HOA (A-Z) → Xóa (bỏ qua)
 * - Ký tự in thường (a-z) → Thay bằng "*"
 * - Ký tự số (0-9) → Thay bằng "-"
 *
 * Ví dụ:
 * "Dan3002" → "**----"
 *   D: xóa
 *   a: *
 *   n: *
 *   3: -
 *   0: -
 *   0: -
 *   2: -
 *
 * "ABCddd321dD" → "***---*"
 *   ABC: xóa
 *   ddd: ***
 *   321: ---
 *   d: *
 *   D: xóa
 */
function encodeChar(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        // Kiểm tra ký tự in thường (a-z)
        if (char >= "a" && char <= "z") {
            result += "*";
        }
        // Kiểm tra ký tự số (0-9)
        else if (char >= "0" && char <= "9") {
            result += "-";
        } else if (!(char >= "A" && char <= "Z")) {
            result += char;
        }
        // Ký tự in hoa (A-Z) → bỏ qua
        // Các ký tự khác → bỏ qua
    }

    return result;
}

module.exports = encodeChar;
