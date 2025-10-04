/**
 * BÀI TOÁN: THE N VALUE - CHUYỂN ĐỔI CHỮ SỐ THEO QUY TẮC
 *
 * Quy tắc chuyển đổi:
 * - Chữ số đầu tiên (bên trái): giữ nguyên
 * - Các chữ số còn lại: chuyển theo quy tắc digit → (digit + 1) % 10
 *   (0→1, 1→2, ..., 8→9, 9→0)
 * - Nếu n không phải số tự nhiên (n ≤ 0): trả về 0
 *
 * Ví dụ:
 * - n = 394 → N = 305
 *   - 3 (đầu tiên): giữ nguyên → 3
 *   - 9: 9+1=10 → 0 (9→0)
 *   - 4: 4+1=5 → 5
 *   - Kết quả: 305
 *
 * CÁCH GIẢI:
 * 1. Kiểm tra n có phải số tự nhiên (> 0)
 * 2. Chuyển n thành chuỗi để xử lý từng chữ số
 * 3. Giữ nguyên chữ số đầu, chuyển đổi các chữ số còn lại
 * 4. Ghép lại thành số và trả về
 */
function theNValue(n) {
    // Kiểm tra n có phải số tự nhiên không
    if (n <= 0 || !Number.isInteger(n)) {
        return 0;
    }

    // Chuyển n thành chuỗi để xử lý từng chữ số
    const nStr = n.toString();
    let result = "";

    // Xử lý từng chữ số
    for (let i = 0; i < nStr.length; i++) {
        const digit = parseInt(nStr[i]);

        if (i === 0) {
            // Chữ số đầu tiên: giữ nguyên
            result += digit;
        } else {
            // Các chữ số còn lại: áp dụng quy tắc (digit + 1) % 10
            const newDigit = (digit + 1) % 10;
            result += newDigit;
        }
    }

    // Chuyển kết quả thành số và trả về
    return parseInt(result);
}

// Test với ví dụ đề bài
console.log("Test case: theNValue(394) =", theNValue(394)); // Kết quả mong đợi: 305

// Thêm các test case khác
console.log("Test case: theNValue(123) =", theNValue(123)); // 1 + 2→3 + 3→4 = 134
console.log("Test case: theNValue(999) =", theNValue(999)); // 9 + 9→0 + 9→0 = 900
console.log("Test case: theNValue(1) =", theNValue(1)); // Chỉ có 1 chữ số: 1
console.log("Test case: theNValue(10) =", theNValue(10)); // 1 + 0→1 = 11
console.log("Test case: theNValue(9876) =", theNValue(9876)); // 9 + 8→9 + 7→8 + 6→7 = 9987

// Test các trường hợp đặc biệt
console.log("Test case: theNValue(0) =", theNValue(0)); // Không phải số tự nhiên: 0
console.log("Test case: theNValue(-5) =", theNValue(-5)); // Số âm: 0

// Phân tích chi tiết cho ví dụ 394
console.log("\n=== Chi tiết phân tích n = 394 ===");
function analyzeTransformation(n) {
    if (n <= 0) {
        console.log(`${n} không phải số tự nhiên → 0`);
        return;
    }

    const nStr = n.toString();
    console.log(`Số ban đầu: ${n}`);
    console.log("Chuyển đổi từng chữ số:");

    let result = "";
    for (let i = 0; i < nStr.length; i++) {
        const digit = parseInt(nStr[i]);

        if (i === 0) {
            console.log(`  Vị trí ${i}: ${digit} (chữ số đầu) → ${digit}`);
            result += digit;
        } else {
            const newDigit = (digit + 1) % 10;
            console.log(`  Vị trí ${i}: ${digit} → ${newDigit} (${digit}+1=${digit + 1}, %10=${newDigit})`);
            result += newDigit;
        }
    }

    console.log(`Kết quả: ${result}`);
}

analyzeTransformation(394);

// Export function
module.exports = theNValue;
