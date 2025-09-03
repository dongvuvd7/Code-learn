/**
 * Sắp xếp mảng theo số lượng bit 1 trong biểu diễn nhị phân
 *
 * Bài toán: Sắp xếp mảng theo 2 tiêu chí:
 * 1. Ưu tiên chính: Số lượng bit 1 tăng dần
 * 2. Ưu tiên phụ: Nếu có cùng số bit 1, sắp xếp theo giá trị tăng dần
 *
 * Thuật toán:
 * 1. Đếm số bit 1 của mỗi phần tử
 * 2. Sử dụng custom comparator để sắp xếp
 * 3. So sánh theo số bit 1 trước, sau đó theo giá trị
 *
 * Ví dụ: [0,1,2,3,4,5,6,7,8]
 * - 0 (0000): 0 bit 1
 * - 1 (0001), 2 (0010), 4 (0100), 8 (1000): 1 bit 1
 * - 3 (0011), 5 (0101), 6 (0110): 2 bit 1
 * - 7 (0111): 3 bit 1
 * → Kết quả: [0,1,2,4,8,3,5,6,7]
 *
 * @param {number[]} a - Mảng số nguyên (1 ≤ length ≤ 1000, 0 ≤ a[i] ≤ 10^4)
 * @returns {number[]} Mảng đã sắp xếp theo tiêu chí
 */
function sortByCountBitOne(a) {
    /**
     * Đếm số lượng bit 1 trong biểu diễn nhị phân của một số
     * @param {number} num - Số cần đếm bit 1
     * @returns {number} Số lượng bit 1
     */
    function countBits(num) {
        let count = 0;
        while (num > 0) {
            count += num & 1; // Kiểm tra bit cuối cùng
            num >>= 1; // Dịch phải 1 bit
        }
        return count;
    }

    // Tạo bản sao của mảng để không thay đổi mảng gốc
    const result = [...a];

    // Sắp xếp theo custom comparator
    result.sort((x, y) => {
        const bitsX = countBits(x);
        const bitsY = countBits(y);

        // Ưu tiên 1: So sánh theo số lượng bit 1
        if (bitsX !== bitsY) {
            return bitsX - bitsY; // Tăng dần theo số bit 1
        }

        // Ưu tiên 2: Nếu số bit 1 bằng nhau, so sánh theo giá trị
        return x - y; // Tăng dần theo giá trị
    });

    return result;
}

// Kiểm tra với ví dụ từ đề bài
console.log("Kiểm tra hàm sortByCountBitOne:");
const input = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const result = sortByCountBitOne(input);
console.log(`Input: [${input}]`);
console.log(`Output: [${result}]`); // Kết quả mong đợi: [0,1,2,4,8,3,5,6,7]

// Hiển thị kết quả nhóm theo số bit 1
console.log("\nKết quả nhóm theo số bit 1:");
const grouped = {};
result.forEach((num) => {
    const bitCount = num.toString(2).split("1").length - 1;
    if (!grouped[bitCount]) {
        grouped[bitCount] = [];
    }
    grouped[bitCount].push(num);
});

Object.keys(grouped)
    .sort()
    .forEach((bitCount) => {
        console.log(`${bitCount} bit 1: [${grouped[bitCount].join(", ")}]`);
    });

// Các test case bổ sung
console.log("\nCác test case khác:");
console.log(`sortByCountBitOne([1, 2, 3]) = [${sortByCountBitOne([1, 2, 3])}]`);
console.log(`sortByCountBitOne([7, 6, 5, 4]) = [${sortByCountBitOne([7, 6, 5, 4])}]`);
console.log(`sortByCountBitOne([15, 14, 13, 12]) = [${sortByCountBitOne([15, 14, 13, 12])}]`);
console.log(`sortByCountBitOne([0]) = [${sortByCountBitOne([0])}]`);
console.log(`sortByCountBitOne([10, 9, 8, 7, 6, 5]) = [${sortByCountBitOne([10, 9, 8, 7, 6, 5])}]`);
