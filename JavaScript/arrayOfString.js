/**
 * BÀI TOÁN: SIMILAR STRING ARRAY - MẢNG CHUỖI TƯƠNG ĐỒNG
 *
 * Định nghĩa:
 * - Hai chuỗi tương đồng nếu chuỗi lớn chứa đủ ký tự để tạo chuỗi nhỏ
 * - Ví dụ: "abc" ~ "cba" (cùng ký tự)
 * - Ví dụ: "abc" ~ "cbda" ("cbda" chứa đủ a,b,c)
 *
 * Yêu cầu:
 * - Kiểm tra MỌI cặp (a[i], b[i]) phải tương đồng
 * - Trả về true nếu TẤT CẢ tương đồng, false nếu có BẤT KỲ cặp nào không tương đồng
 *
 * Ví dụ:
 * ["apple","pen","reduce"] vs ["ale","enp","ude"]
 * - "apple" chứa "ale" (a,l,e) ✓
 * - "pen" chứa "enp" (e,n,p) ✓
 * - "reduce" chứa "ude" (u,d,e) ✓
 * → true
 *
 * CÁCH GIẢI:
 * 1. Với mỗi cặp (a[i], b[i])
 * 2. Xác định chuỗi ngắn và chuỗi dài
 * 3. Đếm tần suất ký tự của chuỗi ngắn
 * 4. Kiểm tra chuỗi dài có chứa đủ số lượng mỗi ký tự không
 * 5. Nếu TẤT CẢ các cặp đều tương đồng → true, ngược lại → false
 */
function arrayOfString(a, b) {
    // Kiểm tra độ dài mảng
    if (a.length !== b.length) {
        return false;
    }

    // Hàm kiểm tra 2 chuỗi có tương đồng không
    function isSimilar(str1, str2) {
        // Xác định chuỗi ngắn và dài
        const shorter = str1.length <= str2.length ? str1 : str2;
        const longer = str1.length <= str2.length ? str2 : str1;

        // Đếm tần suất ký tự của chuỗi ngắn
        const charCount = {};
        for (const char of shorter) {
            // Bỏ qua khoảng trắng và ký tự đặc biệt (chỉ lấy chữ cái)
            if (/[a-zA-Z]/.test(char)) {
                const lowerChar = char.toLowerCase();
                charCount[lowerChar] = (charCount[lowerChar] || 0) + 1;
            }
        }

        // Đếm tần suất ký tự của chuỗi dài
        const longerCount = {};
        for (const char of longer) {
            if (/[a-zA-Z]/.test(char)) {
                const lowerChar = char.toLowerCase();
                longerCount[lowerChar] = (longerCount[lowerChar] || 0) + 1;
            }
        }

        // Kiểm tra chuỗi dài có chứa đủ số lượng mỗi ký tự của chuỗi ngắn không
        for (const char in charCount) {
            if (!longerCount[char] || longerCount[char] < charCount[char]) {
                return false;
            }
        }

        return true;
    }

    // Kiểm tra tất cả các cặp
    for (let i = 0; i < a.length; i++) {
        if (!isSimilar(a[i], b[i])) {
            return false;
        }
    }

    return true;
}

module.exports = arrayOfString;
