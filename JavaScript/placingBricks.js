/**
 * Tính số cách đặt gạch để xây con đường có độ dài n mét và độ rộng 2 mét
 *
 * Bài toán: Đặt gạch 1x2 hoặc 2x1 trên đường có kích thước n×2
 * - Gạch 1x2: đặt ngang (chiếm 1 cột, phủ kín 2 hàng)
 * - Gạch 2x1: đặt dọc (chiếm 2 cột, mỗi gạch phủ 1 hàng, cần 2 gạch)
 *
 * Phân tích quy hoạch động:
 * - f(n) = số cách đặt gạch cho đường dài n
 * - f(1) = 1 (chỉ có cách đặt 1 gạch ngang)
 * - f(2) = 2 (đặt 2 gạch ngang hoặc 2 gạch dọc)
 * - f(n) = f(n-1) + f(n-2) cho n > 2
 *   + f(n-1): thêm 1 gạch ngang vào cuối
 *   + f(n-2): thêm 2 gạch dọc vào cuối
 *
 * Do n có thể lên đến 10^9, cần sử dụng phương pháp nhân ma trận
 * để tính Fibonacci trong O(log n).
 *
 * @param {number} n - Độ dài con đường (1 ≤ n ≤ 10^9)
 * @returns {number} - Số cách đặt gạch mod 10009
 */
function placingBricks(n) {
    const MOD = 10009;

    // Trường hợp cơ sở
    if (n === 1) return 1;
    if (n === 2) return 2;

    // Ma trận chuyển đổi cho dãy Fibonacci
    // [f(n), f(n-1)] = [f(n-1), f(n-2)] * [[1, 1], [1, 0]]
    function matrixMultiply(A, B) {
        return [
            [(A[0][0] * B[0][0] + A[0][1] * B[1][0]) % MOD, (A[0][0] * B[0][1] + A[0][1] * B[1][1]) % MOD],
            [(A[1][0] * B[0][0] + A[1][1] * B[1][0]) % MOD, (A[1][0] * B[0][1] + A[1][1] * B[1][1]) % MOD],
        ];
    }

    // Tính lũy thừa ma trận bằng thuật toán chia để trị
    function matrixPower(matrix, power) {
        // Ma trận đơn vị
        let result = [
            [1, 0],
            [0, 1],
        ];
        let base = matrix;

        while (power > 0) {
            if (power % 2 === 1) {
                result = matrixMultiply(result, base);
            }
            base = matrixMultiply(base, base);
            power = Math.floor(power / 2);
        }

        return result;
    }

    // Ma trận chuyển đổi Fibonacci
    const fibMatrix = [
        [1, 1],
        [1, 0],
    ];

    // Tính ma trận^(n-2)
    const resultMatrix = matrixPower(fibMatrix, n - 2);

    // f(n) = f(2) * result[0][0] + f(1) * result[0][1]
    //      = 2 * result[0][0] + 1 * result[0][1]
    const result = (2 * resultMatrix[0][0] + 1 * resultMatrix[0][1]) % MOD;

    return result;
}

// Test với các ví dụ từ đề bài
console.log(placingBricks(1)); // Kết quả mong đợi: 1
console.log(placingBricks(2)); // Kết quả mong đợi: 2
console.log(placingBricks(3)); // Kết quả mong đợi: 3
console.log(placingBricks(4)); // Kết quả mong đợi: 5
console.log(placingBricks(5)); // Kết quả mong đợi: 8

// Test với số lớn
console.log(placingBricks(10)); // Kết quả mong đợi: 89
console.log(placingBricks(100)); // Test với số lớn hơn
