/**
 * Kiểm tra chuỗi có phải là palindrome hay không
 *
 * Bài toán: Kiểm tra chuỗi đối xứng chỉ xét chữ cái và số,
 * bỏ qua ký tự đặc biệt và không phân biệt hoa/thường.
 *
 * Thuật toán:
 * 1. Chuyển chuỗi về chữ thường
 * 2. Lọc chỉ giữ lại chữ cái và số
 * 3. So sánh chuỗi với chuỗi đảo ngược
 *
 * Ví dụ: "code*@e do(c"
 * → "codeedoc" → so sánh với "codeedoc" → true
 *
 * @param {string} s - Chuỗi cần kiểm tra (0 ≤ length ≤ 10^5)
 * @returns {boolean} - true nếu là palindrome, false nếu không
 */
function validPalindrome(s) {
    // Xử lý chuỗi: chuyển về lowercase và lọc ký tự hợp lệ
    const chars = s
        .toLowerCase() // Chuyển tất cả về chữ thường
        .split("") // Tách thành mảng ký tự
        .filter((char) => /[a-z0-9]/.test(char)); // Chỉ giữ chữ cái và số

    // So sánh chuỗi gốc với chuỗi đảo ngược
    return chars.join("") === chars.reverse().join("");
}
