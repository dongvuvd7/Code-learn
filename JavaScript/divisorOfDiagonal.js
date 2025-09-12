/**
 * Tính tổng các phần tử trên đường chéo chính của ma trận n×n
 *
 * Bài toán: Cho ma trận n×n bắt đầu từ số m, tính tổng đường chéo chính
 * và trả về 3 chữ số cuối cùng của kết quả
 *
 * Phân tích ma trận:
 * - Ma trận n×n có các phần tử từ m đến m + n²-1
 * - Phần tử tại vị trí (i,j) có giá trị: m + i*n + j
 * - Đường chéo chính: (0,0), (1,1), (2,2), ..., (n-1,n-1)
 * - Phần tử đường chéo thứ i: m + i*n + i = m + i*(n+1)
 *
 * Công thức tổng đường chéo:
 * S = Σ(i=0 to n-1)[m + i*(n+1)]
 * S = n*m + (n+1)*Σ(i=0 to n-1)i
 * S = n*m + (n+1)*n*(n-1)/2
 *
 * Ví dụ: n=4, m=5
 * Ma trận:  5  6  7  8
 *           9 10 11 12
 *          13 14 15 16
 *          17 18 19 20
 * Đường chéo: 5 + 10 + 15 + 20 = 50
 *
 * @param {number} n - Kích thước ma trận (0 ≤ n ≤ 10^12)
 * @param {number} m - Số bắt đầu của ma trận (-10000 ≤ m ≤ 10000)
 * @returns {number} 3 chữ số cuối của tổng đường chéo (hoặc toàn bộ nếu < 3 chữ số)
 */
function divisorOfDiagonal(n, m) {
    // Trường hợp đặc biệt: ma trận rỗng
    if (n === 0) {
        return 0;
    }

    // Trường hợp ma trận 1×1
    if (n === 1) {
        const result = m;
        return Math.abs(result) % 1000;
    }

    // Sử dụng BigInt để xử lý số lớn (n có thể lên đến 10^12)
    const bigN = BigInt(n);
    const bigM = BigInt(m);

    // Công thức: S = n*m + (n+1)*n*(n-1)/2
    // Tính từng phần để tránh overflow
    const part1 = bigN * bigM; // n*m
    const part2 = ((bigN + 1n) * bigN * (bigN - 1n)) / 2n; // (n+1)*n*(n-1)/2

    const totalSum = part1 + part2;

    // Lấy 3 chữ số cuối cùng (hoặc toàn bộ nếu < 3 chữ số)
    const absSum = totalSum < 0n ? -totalSum : totalSum;
    const last3Digits = absSum % 1000n;

    return Number(last3Digits);
}

/**
 * Hàm kiểm tra bằng cách tính trực tiếp (chỉ dùng cho n nhỏ)
 * @param {number} n - Kích thước ma trận
 * @param {number} m - Số bắt đầu
 * @returns {number} Tổng đường chéo
 */
function directCalculation(n, m) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        // Phần tử đường chéo tại vị trí (i,i)
        const diagonalElement = m + i * n + i;
        sum += diagonalElement;
        console.log(`Phần tử [${i}][${i}] = ${diagonalElement}`);
    }
    return sum;
}

// Kiểm tra với ví dụ từ đề bài
console.log("Kiểm tra hàm divisorOfDiagonal:");
console.log(`divisorOfDiagonal(4, 5) = ${divisorOfDiagonal(4, 5)}`); // Kết quả mong đợi: 50

// Kiểm tra chi tiết với ví dụ n=4, m=5
console.log("\nKiểm tra chi tiết cho n=4, m=5:");
console.log("Ma trận 4×4 bắt đầu từ 5:");
for (let i = 0; i < 4; i++) {
    let row = "";
    for (let j = 0; j < 4; j++) {
        const value = 5 + i * 4 + j;
        row += value.toString().padStart(3, " ") + " ";
    }
    console.log(row);
}

console.log("\nTính tổng đường chéo trực tiếp:");
const directSum = directCalculation(4, 5);
console.log(`Tổng trực tiếp: ${directSum}`);

// Các test case bổ sung
console.log("\nCác test case khác:");
console.log(`divisorOfDiagonal(0, 5) = ${divisorOfDiagonal(0, 5)}`); // Ma trận rỗng: 0
console.log(`divisorOfDiagonal(1, 5) = ${divisorOfDiagonal(1, 5)}`); // Ma trận 1×1: 5
console.log(`divisorOfDiagonal(2, 1) = ${divisorOfDiagonal(2, 1)}`); // Ma trận 2×2 từ 1: 1+4=5
console.log(`divisorOfDiagonal(3, 0) = ${divisorOfDiagonal(3, 0)}`); // Ma trận 3×3 từ 0: 0+4+8=12
console.log(`divisorOfDiagonal(10, 1) = ${divisorOfDiagonal(10, 1)}`); // Test số lớn hơn

// Test với số âm
console.log(`divisorOfDiagonal(3, -5) = ${divisorOfDiagonal(3, -5)}`); // Ma trận bắt đầu từ số âm
