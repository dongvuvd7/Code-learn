/**
 * BÀI TOÁN: DOUBLE STRING - CHUỖI XUẤT HIỆN NHIỀU LẦN
 *
 * Định nghĩa:
 * - s1 là doubleString nếu s2 xuất hiện ≥ 2 lần trong s1
 * - Hai substring khác nhau nếu vị trí khác nhau
 *
 * Ví dụ:
 * s1 = "abcddbc", s2 = "bc"
 * - "bc" ở vị trí 1: "abcddbc"
 * - "bc" ở vị trí 5: "abcddbc"
 * - Tổng: 2 lần → true
 *
 * s1 = "abcd", s2 = "cd"
 * - "cd" ở vị trí 2: "abcd"
 * - Tổng: 1 lần → false
 *
 * CÁCH GIẢI:
 * - Duyệt qua s1, đếm số lần xuất hiện của s2
 * - Nếu count ≥ 2 → true
 * - Ngược lại → false
 *
 * Lưu ý: Các substring có thể chồng lấp
 * Ví dụ: s1="aaa", s2="aa" → 2 lần (vị trí 0 và 1)
 */
function doubleString(s1, s2) {
    const len1 = s1.length;
    const len2 = s2.length;

    // Kiểm tra điều kiện cơ bản
    if (len2 > len1) {
        return false; // s2 dài hơn s1 → không thể xuất hiện
    }

    let count = 0;

    // Duyệt qua s1 để tìm s2
    for (let i = 0; i <= len1 - len2; i++) {
        // Kiểm tra substring tại vị trí i
        if (s1.substring(i, i + len2) === s2) {
            count++;

            // Tối ưu: nếu đã tìm được 2 lần, trả về luôn
            if (count >= 2) {
                return true;
            }
        }
    }

    // Nếu count < 2
    return false;
}

module.exports = doubleString;
