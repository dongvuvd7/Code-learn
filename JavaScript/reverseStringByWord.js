/**
 * BÀI TOÁN: REVERSE STRING BY WORD - ĐẢO CHUỖI THEO TỪNG TỪ
 *
 * Mô tả: Đảo ngược thứ tự các từ trong chuỗi s, xóa dấu cách thừa (nhiều → 1), xóa leading/trailing spaces.
 *        Từ được tách bởi space, giữ nguyên punctuation.
 *
 * Ví dụ: s = " code,    learn" → "learn code,"
 *
 * HƯỚNG GIẢI:
 * - Trim s để xóa leading/trailing spaces.
 * - Replace \s+ với ' ' để xử lý multiple spaces.
 * - Split bằng ' ' thành array words.
 * - Reverse array.
 * - Join bằng ' '.
 * - Thời gian O(n), hiệu quả.
 */
function reverseStringByWord(s) {
    if (!s) return "";
    const cleaned = s.trim().replace(/\s+/g, " ");
    const words = cleaned.split(" ");
    words.reverse();
    return words.join(" ");
}
