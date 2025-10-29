/**
 * BÀI TOÁN: COIN CHANGE - ĐẾM SỐ CÁCH ĐỔI TIỀN
 *
 * Mô tả: Đếm số cách tạo thành số tiền a từ các đồng tiền có mệnh giá trong mảng c
 *        (mỗi loại tiền có số lượng vô hạn)
 *
 * Ví dụ: a = 5, c = [1,2,5]
 * - 5 = 5
 * - 5 = 2 + 2 + 1
 * - 5 = 2 + 1 + 1 + 1
 * - 5 = 1 + 1 + 1 + 1 + 1
 * → Có 4 cách
 *
 * CÁCH GIẢI: Quy hoạch động
 * - dp[i] = số cách tạo thành số tiền i
 * - dp[0] = 1 (1 cách: không lấy đồng nào)
 * - Với mỗi đồng tiền coin:
 *     dp[i] += dp[i - coin] (nếu i >= coin)
 */
function change(a, c) {
    // Mảng dp: dp[i] = số cách tạo thành số tiền i
    const dp = new Array(a + 1).fill(0);
    dp[0] = 1; // 1 cách tạo số tiền 0 (không lấy đồng nào)

    // Duyệt qua từng loại tiền
    for (let coin of c) {
        // Với mỗi loại tiền, cập nhật số cách cho các số tiền từ coin đến a
        for (let i = coin; i <= a; i++) {
            dp[i] += dp[i - coin];
        }
    }

    return dp[a];
}

// Test cases
console.log("Test 1: change(5, [1,2,5]) =", change(5, [1, 2, 5]));
// Expected: 4

console.log("Test 2: change(3, [2]) =", change(3, [2]));
// Expected: 0 (không thể tạo được)

console.log("Test 3: change(10, [2,5,3,6]) =", change(10, [2, 5, 3, 6]));
// Expected: 5

console.log("Test 4: change(4, [1,2,3]) =", change(4, [1, 2, 3]));
// Expected: 4

module.exports = change;
