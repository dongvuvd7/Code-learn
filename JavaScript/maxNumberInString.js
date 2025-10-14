/**
 * BÀI TOÁN: MAX NUMBER IN STRING - SỐ LỚN NHẤT TRONG CHUỖI
 *
 * Mô tả: Tìm số lớn nhất xuất hiện trong chuỗi. Nếu không có số nào thì trả về -1.
 *
 * Ví dụ:
 * - "a123b4" → 123 (các số: 1,2,3,12,23,123,4 → max = 123)
 * - "abcd" → -1 (không có số nào)
 *
 * CÁCH GIẢI:
 * 1. Duyệt qua từng ký tự trong chuỗi
 * 2. Khi gặp chữ số, tạo thành số hoàn chỉnh bằng cách nối các chữ số liên tiếp
 * 3. So sánh và lưu số lớn nhất
 * 4. Trả về -1 nếu không tìm thấy số nào
 */
function maxNumberInString(str) {
    let maxNumber = -1;
    let currentNumber = "";
    let hasDigit = false;

    // Duyệt qua từng ký tự trong chuỗi
    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        // Kiểm tra xem ký tự có phải chữ số không
        if (char >= "0" && char <= "9") {
            currentNumber += char;
            hasDigit = true;
        } else {
            // Gặp ký tự không phải số, xử lý số hiện tại (nếu có)
            if (currentNumber !== "") {
                const num = parseInt(currentNumber);
                maxNumber = Math.max(maxNumber, num);
                currentNumber = "";
            }
        }
    }

    // Xử lý số cuối cùng (nếu chuỗi kết thúc bằng số)
    if (currentNumber !== "") {
        const num = parseInt(currentNumber);
        maxNumber = Math.max(maxNumber, num);
    }

    // Trả về -1 nếu không có chữ số nào
    return hasDigit ? maxNumber : -1;
}

// Test với các ví dụ đề bài
console.log("=== Test với ví dụ đề bài ===");
console.log(`maxNumberInString("a123b4") = ${maxNumberInString("a123b4")}`); // Expected: 123
console.log(`maxNumberInString("abcd") = ${maxNumberInString("abcd")}`); // Expected: -1

// Phân tích chi tiết
console.log("\n=== Phân tích chi tiết ===");

function analyzeString(str) {
    console.log(`\nPhân tích chuỗi "${str}":`);

    let completeNumbers = [];
    let currentNumber = "";

    // Tìm các số hoàn chỉnh (dãy chữ số liên tiếp)
    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (char >= "0" && char <= "9") {
            currentNumber += char;
        } else {
            if (currentNumber !== "") {
                completeNumbers.push(parseInt(currentNumber));
                currentNumber = "";
            }
        }
    }

    // Xử lý số cuối cùng
    if (currentNumber !== "") {
        completeNumbers.push(parseInt(currentNumber));
    }

    if (completeNumbers.length === 0) {
        console.log("  Không có số nào → kết quả: -1");
    } else {
        console.log(`  Các số hoàn chỉnh: [${completeNumbers.join(", ")}]`);
        console.log(`  Số lớn nhất: ${Math.max(...completeNumbers)}`);
    }

    return maxNumberInString(str);
}

analyzeString("a123b4");
analyzeString("abcd");

// Thêm các test case khác
console.log("\n=== Test cases bổ sung ===");

console.log(`maxNumberInString("123") = ${maxNumberInString("123")}`); // 123
console.log(`maxNumberInString("1a2b3c") = ${maxNumberInString("1a2b3c")}`); // 3
console.log(`maxNumberInString("abc123def456ghi") = ${maxNumberInString("abc123def456ghi")}`); // 456
console.log(`maxNumberInString("") = ${maxNumberInString("")}`); // -1
console.log(`maxNumberInString("!@#$%^&*()") = ${maxNumberInString("!@#$%^&*()")}`); // -1

// Phân tích một số case phức tạp
console.log("\n=== Phân tích cases phức tạp ===");

analyzeString("abc123def456ghi");
analyzeString("1a2b3c456d789");
analyzeString("00123a00456");

// Test với số có chữ số 0 đầu
console.log("\n=== Test với số có chữ số 0 đầu ===");
console.log(`maxNumberInString("007abc123") = ${maxNumberInString("007abc123")}`); // 123 (vì 007 = 7)
console.log(`maxNumberInString("000") = ${maxNumberInString("000")}`); // 0

// Export function
module.exports = maxNumberInString;
