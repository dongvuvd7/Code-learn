/**
 * Kiểm tra chuỗi có phải là mật khẩu chuẩn của Hải hay không
 *
 * Bài toán: Hải chỉ dùng mật khẩu gồm:
 * - Chỉ chữ cái thường ('a' đến 'z') HOẶC
 * - Chỉ chữ số ('0' đến '9')
 *
 * Thuật toán với Regex:
 * - /^[a-z]+$/ : Kiểm tra chuỗi chỉ chứa chữ thường từ đầu đến cuối
 * - /^[0-9]+$/ : Kiểm tra chuỗi chỉ chứa chữ số từ đầu đến cuối
 * - ^ : bắt đầu chuỗi
 * - $ : kết thúc chuỗi
 * - + : một hoặc nhiều ký tự
 *
 * Ví dụ:
 * - "asvxsdd": khớp với /^[a-z]+$/ → true
 * - "292844": khớp với /^[0-9]+$/ → true
 * - "23fdsg3": không khớp với cả hai → false
 *
 * @param {string} s - Chuỗi cần kiểm tra (1 ≤ length ≤ 10^5)
 * @returns {boolean} - true nếu là mật khẩu chuẩn, false nếu không
 */
function standardPassword(s) {
    // Kiểm tra chỉ chữ thường HOẶC chỉ chữ số
    return /^[a-z]+$/.test(s) || /^[0-9]+$/.test(s);
}

// Test với các ví dụ từ đề bài
console.log(standardPassword("asvxsdd")); // true - toàn chữ thường
console.log(standardPassword("292844")); // true - toàn chữ số
console.log(standardPassword("23fdsg3")); // false - có cả chữ và số

// Test thêm các trường hợp khác
console.log(standardPassword("a")); // true - một chữ thường
console.log(standardPassword("0")); // true - một chữ số
console.log(standardPassword("ABC")); // false - chữ hoa
console.log(standardPassword("abc123")); // false - có cả chữ và số
console.log(standardPassword("!@#")); // false - ký tự đặc biệt
