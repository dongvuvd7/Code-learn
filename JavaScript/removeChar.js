/**
 * BÀI TOÁN: REMOVE CHAR - XÓA KÝ TỰ
 *
 * Yêu cầu:
 * - Xóa tất cả ký tự của s1 mà ký tự đó xuất hiện trong s2
 *
 * Ví dụ:
 * s1 = "abcdd", s2 = "ad"
 * - 'a' xuất hiện trong s2 → xóa
 * - 'b' không có trong s2 → giữ
 * - 'c' không có trong s2 → giữ
 * - 'd' xuất hiện trong s2 → xóa
 * - 'd' xuất hiện trong s2 → xóa
 * → Kết quả: "bc"
 *
 * CÁCH GIẢI:
 * 1. Tạo Set từ s2 để tra cứu nhanh O(1)
 * 2. Duyệt từng ký tự của s1
 * 3. Nếu ký tự không có trong Set → thêm vào kết quả
 *
 * Độ phức tạp: O(n + m)
 */
function removeChar(s1, s2) {
    // Tạo Set từ s2 để tra cứu nhanh
    const charsToRemove = new Set(s2);

    // Duyệt s1 và giữ lại ký tự không có trong s2
    let result = "";

    for (let i = 0; i < s1.length; i++) {
        const char = s1[i];

        // Nếu ký tự không có trong s2 → giữ lại
        if (!charsToRemove.has(char)) {
            result += char;
        }
    }

    return result;
}

module.exports = removeChar;
