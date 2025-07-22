/**
 * Kiểm tra xem chuỗi s có phải là subsequence của chuỗi t hay không
 * 
 * Bài toán: Cho hai chuỗi s và t, kiểm tra xem s có thể được tạo thành bằng cách
 * xóa một số ký tự từ t mà vẫn giữ nguyên thứ tự các ký tự còn lại hay không.
 * 
 * Thuật toán: Two Pointers
 * - Sử dụng hai con trỏ i (cho s) và j (cho t)
 * - Duyệt qua t, khi tìm thấy ký tự khớp với s[i] thì tăng i
 * - Luôn tăng j để tiếp tục duyệt t
 * - Kết quả: true nếu đã duyệt hết s (i === s.length)
 * 
 * Ví dụ: 
 * - s="abc", t="ahbgdc" → true (a-h-b-g-d-c, lấy a,b,c)
 * - s="axc", t="ahbgdc" → false (không tìm thấy 'x')
 * 
 * @param {string} s - Chuỗi cần kiểm tra subsequence (0 ≤ length ≤ 100)
 * @param {string} t - Chuỗi gốc (0 ≤ length ≤ 10^4)
 * @returns {boolean} - true nếu s là subsequence của t, false nếu ngược lại
 */
function isSubsequence(s, t){
    // Nếu s rỗng, luôn là subsequence
    if (s.length === 0) return true;
    
    // Nếu s dài hơn t, không thể là subsequence
    if (s.length > t.length) return false;
    
    let i = 0; // Con trỏ cho chuỗi s
    let j = 0; // Con trỏ cho chuỗi t
    
    // Duyệt qua chuỗi t
    while (j < t.length && i < s.length) {
        // Nếu ký tự hiện tại của s và t khớp
        if (s[i] === t[j]) {
            i++; // Chuyển đến ký tự tiếp theo của s
        }
        j++; // Luôn chuyển đến ký tự tiếp theo của t
    }
    
    // Nếu đã duyệt hết chuỗi s, tức là tìm được tất cả ký tự
    return i === s.length;
}