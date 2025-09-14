/**
 * Đếm số lượng bit 1 trong biểu diễn nhị phân của các số từ 0 đến num
 *
 * Bài toán: Với mỗi số x (0 ≤ x ≤ num), tính số bit 1 trong biểu diễn nhị phân
 *
 * Phương pháp 1: Quy hoạch động (DP)
 * - Quan sát: dp[i] = dp[i >> 1] + (i & 1)
 * - i >> 1: loại bỏ bit cuối cùng
 * - i & 1: kiểm tra bit cuối cùng có phải là 1 không
 *
 * Phương pháp 2: Built-in function
 * - Sử dụng toString(2) để chuyển sang nhị phân và đếm '1'
 *
 * Ví dụ: num = 2
 * - 0 (0b0): 0 bit 1
 * - 1 (0b1): 1 bit 1
 * - 2 (0b10): 1 bit 1
 * → Kết quả: [0, 1, 1]
 *
 * @param {number} num - Số nguyên không âm (0 ≤ num ≤ 10^5)
 * @returns {number[]} Mảng chứa số lượng bit 1 của từng số từ 0 đến num
 */
function countingBitOne(num) {
    // Mảng kết quả
    const result = new Array(num + 1);

    // Trường hợp cơ sở
    result[0] = 0;

    // Sử dụng quy hoạch động
    for (let i = 1; i <= num; i++) {
        // Công thức: dp[i] = dp[i >> 1] + (i & 1)
        // i >> 1: số có được bằng cách loại bỏ bit cuối của i
        // i & 1: 1 nếu bit cuối của i là 1, 0 nếu bit cuối là 0
        result[i] = result[i >> 1] + (i & 1);
    }

    return result;
}

// Kiểm tra với ví dụ từ đề bài
console.log("Kiểm tra hàm countingBitOne:");
console.log(`countingBitOne(2) = [${countingBitOne(2)}]`); // Kết quả mong đợi: [0, 1, 1]

// Kiểm tra chi tiết cho num = 5
console.log("\nKiểm tra chi tiết cho num = 5:");
const result5 = countingBitOne(5);
for (let i = 0; i <= 5; i++) {
    const binary = i.toString(2).padStart(4, "0");
    console.log(`${i} → ${binary} → ${result5[i]} bit 1`);
}

// Test với các số khác
console.log("\nCác test case khác:");
console.log(`countingBitOne(0) = [${countingBitOne(0)}]`); // [0]
console.log(`countingBitOne(1) = [${countingBitOne(1)}]`); // [0, 1]
console.log(`countingBitOne(3) = [${countingBitOne(3)}]`); // [0, 1, 1, 2]
console.log(`countingBitOne(7) = [${countingBitOne(7)}]`); // [0, 1, 1, 2, 1, 2, 2, 3]
console.log(`countingBitOne(15) = [${countingBitOne(15)}]`); // Test với số lớn hơn
