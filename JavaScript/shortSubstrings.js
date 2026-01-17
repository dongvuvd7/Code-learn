/**
 * BÀI TOÁN: SHORT SUBSTRINGS - KHÔI PHỤC CHUỖI GỐC
 *
 * Mô tả:
 * - Từ chuỗi s, tạo str bằng cách nối tất cả substring liên tiếp độ dài 2
 * - Cho trước str, tìm s gốc
 *
 * Ví dụ:
 * s = "abcc"
 * Substrings: "ab", "bc", "cc"
 * str = "ab" + "bc" + "cc" = "abbccc"
 *
 * Phân tích:
 * - Nếu s có độ dài n → có (n-1) substring
 * - Độ dài str = 2(n-1) = 2n - 2
 * - Vậy n = (len(str) + 2) / 2
 *
 * Khôi phục:
 * - s[0] = str[0]
 * - s[1] = str[1]
 * - s[2] = str[3] (ký tự thứ 2 của substring "bc")
 * - s[3] = str[5] (ký tự thứ 2 của substring "cc")
 * - Quy luật: s[i] = str[2i-1] với i >= 1
 *
 * Hoặc đơn giản:
 * - s[0] = str[0]
 * - s[i] = str[2*i - 1] với i >= 1
 */
function shortSubstrings(str) {
    const len = str.length;

    // Kiểm tra điều kiện
    if (len === 0) {
        return "-1";
    }

    if (len === 1) {
        return "-1"; // Cần ít nhất 1 substring độ dài 2
    }

    // len(str) = 2(n-1) → len phải chẵn
    if (len % 2 !== 0) {
        return "-1";
    }

    // Tính độ dài s
    const n = (len + 2) / 2;

    // Khôi phục s
    let s = "";
    s += str[0]; // s[0]

    for (let i = 1; i < n; i++) {
        s += str[2 * i - 1]; // s[i]
    }

    // Kiểm tra tính hợp lệ: tạo lại str từ s
    let reconstructed = "";
    for (let i = 0; i < s.length - 1; i++) {
        reconstructed += s[i] + s[i + 1];
    }

    if (reconstructed === str) {
        return s;
    } else {
        return "-1";
    }
}

module.exports = shortSubstrings;
