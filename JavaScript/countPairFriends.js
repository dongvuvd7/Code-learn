/**
 * BÀI TOÁN: COUNT PAIR FRIENDS - ĐẾM SỐ CÁCH GHÉP CẶP BẠN BÈ
 *
 * Mô tả: n người bạn có thể ghép đôi hoặc làm một mình.
 *        Tìm số cách tạo nhóm từ n người.
 *
 * Phân tích:
 * - Với n người, mỗi người có thể:
 *   1. Làm một mình
 *   2. Ghép với một người khác
 *
 * Công thức quy hoạch động:
 * - f(0) = 1 (không có ai)
 * - f(1) = 1 (1 người làm một mình)
 * - f(n) = f(n-1) + (n-1) * f(n-2)
 *   + f(n-1): người thứ n làm một mình
 *   + (n-1) * f(n-2): người thứ n ghép với 1 trong (n-1) người còn lại
 *
 * Ví dụ n=3:
 * - [1], [2], [3] (3 người đều làm một mình)
 * - [1,2], [3] (1 và 2 ghép đôi)
 * - [1], [2,3] (2 và 3 ghép đôi)
 * - [1,3], [2] (1 và 3 ghép đôi)
 * → Tổng: 4 cách
 */
function countPairFriends(n) {
    const MOD = 1000000007;

    // Trường hợp cơ sở
    if (n <= 1) return 1;

    // Sử dụng quy hoạch động với mảng
    let dp = new Array(n + 1);
    dp[0] = 1;
    dp[1] = 1;

    // Tính f(i) = f(i-1) + (i-1) * f(i-2)
    for (let i = 2; i <= n; i++) {
        dp[i] = (dp[i - 1] + (((i - 1) * dp[i - 2]) % MOD)) % MOD;
    }

    return dp[n];
}

// Test với ví dụ đề bài
console.log("Test case: countPairFriends(3) =", countPairFriends(3)); // Kết quả mong đợi: 4

// Thêm các test case khác
console.log("Test case: countPairFriends(0) =", countPairFriends(0)); // 1
console.log("Test case: countPairFriends(1) =", countPairFriends(1)); // 1
console.log("Test case: countPairFriends(2) =", countPairFriends(2)); // 2
console.log("Test case: countPairFriends(4) =", countPairFriends(4)); // 10
console.log("Test case: countPairFriends(5) =", countPairFriends(5)); // 26

// Phân tích chi tiết các trường hợp nhỏ
console.log("\n=== Phân tích chi tiết ===");

function analyzeSmallCases() {
    console.log("n = 0: {} → 1 cách");
    console.log("n = 1: {[1]} → 1 cách");
    console.log("n = 2: {[1],[2]} và {[1,2]} → 2 cách");
    console.log("n = 3:");
    console.log("  - [1], [2], [3] (tất cả làm một mình)");
    console.log("  - [1,2], [3] (1-2 ghép đôi)");
    console.log("  - [1], [2,3] (2-3 ghép đôi)");
    console.log("  - [1,3], [2] (1-3 ghép đôi)");
    console.log("  → Tổng: 4 cách");

    console.log("n = 4:");
    console.log("  - Người 4 làm một mình: f(3) = 4 cách");
    console.log("  - Người 4 ghép với ai đó: 3 * f(2) = 3 * 2 = 6 cách");
    console.log("  → Tổng: 4 + 6 = 10 cách");
}

analyzeSmallCases();

// Test với số lớn hơn
console.log("\n=== Test số lớn ===");
console.log("countPairFriends(10) =", countPairFriends(10));
console.log("countPairFriends(20) =", countPairFriends(20));

// Kiểm tra công thức quy hoạch động
console.log("\n=== Kiểm tra công thức ===");
function verifyFormula(n) {
    if (n <= 1) return;

    const result = countPairFriends(n);
    const prev1 = countPairFriends(n - 1);
    const prev2 = countPairFriends(n - 2);
    const expected = (prev1 + (n - 1) * prev2) % 1000000007;

    console.log(`f(${n}) = f(${n - 1}) + ${n - 1} * f(${n - 2})`);
    console.log(`f(${n}) = ${prev1} + ${n - 1} * ${prev2} = ${prev1} + ${(n - 1) * prev2} = ${expected}`);
    console.log(`Kết quả thực tế: ${result}, Khớp: ${result === expected ? "YES" : "NO"}`);
}

verifyFormula(4);
verifyFormula(5);

// Export function
module.exports = countPairFriends;
