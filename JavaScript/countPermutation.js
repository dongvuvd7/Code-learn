/**
 * Đếm số hoán vị khác nhau của chuỗi có ký tự trùng lặp
 *
 * Bài toán: Cho chuỗi s chỉ gồm chữ hoa A-Z, đếm số hoán vị khác nhau.
 * Các ký tự giống nhau không tạo ra hoán vị mới khi đổi chỗ.
 *
 * Công thức: n! / (n1! × n2! × ... × nk!)
 * - n: tổng số ký tự
 * - ni: số lần xuất hiện của ký tự thứ i
 *
 * Thuật toán tối ưu:
 * 1. Đếm tần suất xuất hiện của mỗi ký tự
 * 2. Tính từng bước bằng công thức tổ hợp C(position, count)
 * 3. Tránh tính giai thừa lớn để không bị tràn số
 *
 * Ví dụ:
 * - "AAB": 3!/(2!×1!) = 6/2 = 3 hoán vị: AAB, ABA, BAA
 * - "AABB": 4!/(2!×2!) = 24/4 = 6 hoán vị
 *
 * @param {string} s - Chuỗi đầu vào (1 ≤ length ≤ 20, 'A' ≤ s[i] ≤ 'Z')
 * @returns {number} - Số hoán vị khác nhau
 */
function countPermutation(s) {
    const frequency = {};
    for (let char of s) {
        frequency[char] = (frequency[char] || 0) + 1;
    }

    // Tính trực tiếp không qua giai thừa để tránh số lớn
    let result = 1;
    let position = s.length;

    for (let char in frequency) {
        const count = frequency[char];
        // Tính C(position, count) = position! / (count! × (position-count)!)
        for (let i = 0; i < count; i++) {
            result *= position - i;
            result /= i + 1;
        }
        position -= count;
    }

    return result;
}
