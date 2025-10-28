/**
 * BÀI TOÁN: CAN MAKE PALINDROME STRING - KIỂM TRA CÓ THỂ SẮP XẾP THÀNH CHUỖI ĐỐI XỨNG
 *
 * Mô tả: Cho chuỗi str, kiểm tra xem có thể sắp xếp lại các ký tự để tạo thành palindrome không.
 * Palindrome: Đọc xuôi và ngược giống nhau (ví dụ: "aba", "1221").
 *
 * Ví dụ:
 * - str = "abdabd" → true (sắp xếp thành "abddba")
 * - str = "asd" → false (không thể sắp xếp thành palindrome)
 *
 * HƯỚNG GIẢI:
 * - Đếm tần suất xuất hiện của từng ký tự.
 * - Trong palindrome, tất cả ký tự phải có tần suất chẵn, ngoại trừ tối đa 1 ký tự có tần suất lẻ (làm trung tâm).
 * - Sử dụng Map hoặc object để đếm (O(n) thời gian, phù hợp với n <= 10^5).
 * - Đếm số ký tự có tần suất lẻ: nếu >1 thì false, ngược lại true.
 */
function canMakePalindromeString(str) {
    if (!str || str.length === 0) return true; // Edge case, dù constraint >=1

    const freq = new Map(); // Hoặc dùng object {}

    // Đếm tần suất
    for (let char of str) {
        freq.set(char, (freq.get(char) || 0) + 1);
    }

    // Đếm số tần suất lẻ
    let oddCount = 0;
    for (let count of freq.values()) {
        if (count % 2 === 1) {
            oddCount++;
        }
    }

    // Kết quả: tối đa 1 lẻ
    return oddCount <= 1;
}
