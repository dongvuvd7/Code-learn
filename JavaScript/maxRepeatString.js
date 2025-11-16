/**
 * BÀI TOÁN: MAX REPEAT STRING - TÌM CHUỖI CON DÀI NHẤT
 *
 * Mô tả: Tìm chuỗi con dài nhất trong s1 mà chỉ gồm các ký tự trong s2
 *        Nếu có nhiều chuỗi cùng độ dài, trả về chuỗi xuất hiện sớm nhất
 *
 * Ví dụ: s1 = "ababcaaabbbcdc", s2 = "abba"
 * - Các ký tự hợp lệ: a, b
 * - Chuỗi con: "abab", "aaabbb" → "aaabbb" dài nhất (6 ký tự)
 *
 * CÁCH GIẢI: Sliding Window
 * 1. Tạo Set chứa các ký tự hợp lệ từ s2
 * 2. Duyệt s1, mở rộng window khi gặp ký tự hợp lệ
 * 3. Reset window khi gặp ký tự không hợp lệ
 * 4. Lưu chuỗi dài nhất
 */
function maxRepeatString(s1, s2) {
    // Tạo Set chứa các ký tự hợp lệ từ s2
    const validChars = new Set(s2);

    let maxLength = 0;
    let maxStart = 0;
    let currentStart = 0;
    let currentLength = 0;

    // Duyệt qua từng ký tự trong s1
    for (let i = 0; i < s1.length; i++) {
        const char = s1[i];

        if (validChars.has(char)) {
            // Ký tự hợp lệ - mở rộng window
            if (currentLength === 0) {
                currentStart = i; // Bắt đầu chuỗi mới
            }
            currentLength++;

            // Cập nhật max nếu tìm được chuỗi dài hơn
            if (currentLength > maxLength) {
                maxLength = currentLength;
                maxStart = currentStart;
            }
        } else {
            // Ký tự không hợp lệ - reset window
            currentLength = 0;
        }
    }

    // Trả về chuỗi con dài nhất
    if (maxLength === 0) {
        return "";
    }

    return s1.substring(maxStart, maxStart + maxLength);
}

// Test cases
console.log('Test 1: maxRepeatString("ababcaaabbbcdc", "abba") =', maxRepeatString("ababcaaabbbcdc", "abba"));
// Expected: "aaabbb"

console.log('Test 2: maxRepeatString("ghghgjkl", "cd") =', maxRepeatString("ghghgjkl", "cd"));
// Expected: ""

console.log('Test 3: maxRepeatString("aabbccaabbaa", "ab") =', maxRepeatString("aabbccaabbaa", "ab"));
// Expected: "aabb" (xuất hiện đầu tiên)

console.log('Test 4: maxRepeatString("xyzabcdefxyz", "abc") =', maxRepeatString("xyzabcdefxyz", "abc"));
// Expected: "abcc" hoặc "abc"

console.log('Test 5: maxRepeatString("aaabbbcccaaa", "a") =', maxRepeatString("aaabbbcccaaa", "a"));
// Expected: "aaa" (xuất hiện đầu tiên)

console.log('Test 6: maxRepeatString("abc", "xyz") =', maxRepeatString("abc", "xyz"));
// Expected: ""

module.exports = maxRepeatString;
