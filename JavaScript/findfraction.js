/**
 * BÀI TOÁN: FIND FRACTION - TÌM PHÂN SỐ TỐI GIẢN ĐÚNG LỚN NHẤT
 *
 * Yêu cầu: Tìm phân số tối giản đúng a/b lớn nhất có tổng tử số và mẫu số = n
 *
 * Điều kiện phân số đúng:
 * - a < b (tử số < mẫu số)
 * - gcd(a, b) = 1 (tối giản)
 * - a + b = n
 *
 * CÁCH GIẢI:
 * 1. Duyệt từ a = n-1 xuống 1 (để tìm phân số lớn nhất)
 * 2. Với mỗi a, tính b = n - a
 * 3. Kiểm tra điều kiện: a < b và gcd(a, b) = 1
 * 4. Trả về phân số đầu tiên thỏa mãn
 *
 * Ví dụ: n = 4
 * - a = 3, b = 1: 3 > 1 (không phải phân số đúng)
 * - a = 2, b = 2: 2 = 2 (không phải phân số đúng)
 * - a = 1, b = 3: 1 < 3 và gcd(1,3) = 1 → 1/3 ✓
 */
function findfraction(n) {
    // Hàm tính ước chung lớn nhất (GCD)
    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    // Duyệt từ a lớn nhất có thể xuống 1
    // Để tìm phân số lớn nhất
    for (let a = Math.floor((n - 1) / 2); a >= 1; a--) {
        let b = n - a;

        // Kiểm tra điều kiện phân số đúng và tối giản
        if (a < b && gcd(a, b) === 1) {
            return `${a}/${b}`;
        }
    }

    // Trường hợp không tìm thấy (không xảy ra với n >= 3)
    return "0/1";
}

// Test với ví dụ đề bài
console.log("Test case: findfraction(4) =", findfraction(4)); // Kết quả mong đợi: 1/3

// Thêm một số test case khác
console.log("Test case: findfraction(5) =", findfraction(5)); // 2/3
console.log("Test case: findfraction(6) =", findfraction(6)); //
console.log("Test case: findfraction(7) =", findfraction(7)); // 3/4
console.log("Test case: findfraction(8) =", findfraction(8)); // 3/5
console.log("Test case: findfraction(10) =", findfraction(10));

// Phân tích chi tiết cho một số trường hợp
console.log("\n=== Chi tiết phân tích ===");

function analyzeCase(n) {
    console.log(`\nPhân tích n = ${n}:`);

    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    for (let a = 1; a < n; a++) {
        let b = n - a;
        if (a < b) {
            let g = gcd(a, b);
            let isFraction = g === 1;
            console.log(
                `  ${a}/${b}: gcd(${a},${b}) = ${g}, tối giản: ${isFraction ? "YES" : "NO"}, giá trị: ${(a / b).toFixed(
                    4
                )}`
            );
        }
    }
}

analyzeCase(4);
analyzeCase(5);

// Export function
module.exports = findfraction;
