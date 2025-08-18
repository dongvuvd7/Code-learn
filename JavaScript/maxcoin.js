/**
 * Tìm số tiền lớn nhất mà người chơi có thể đạt được trong trò chơi coin
 *
 * Luật chơi:
 * - Nếu số tiền hiện tại chẵn: người chơi phải đưa một nửa (còn lại coins/2)
 * - Nếu số tiền hiện tại lẻ: người chơi nhận thêm 2*coins+1 tiền (tổng thành 3*coins+1)
 * - Người chơi có thể chọn dừng bất cứ lúc nào
 * - Trò chơi tự động kết thúc khi người chơi chỉ còn 1 đồng
 *
 * Chiến lược: Sử dụng quy hoạch động với ghi nhớ để khám phá tất cả đường đi có thể
 * và tìm số tiền tối đa có thể đạt được
 *
 * @param {number} n - Số tiền ban đầu (1 ≤ n ≤ 100)
 * @returns {number} Số tiền tối đa người chơi có thể đạt được
 *
 * Ví dụ:
 * n = 11:
 * Lượt 1: 11 (lẻ) → 11 + 2*11+1 = 34 đồng
 * Lượt 2: 34 (chẵn) → 34/2 = 17 đồng
 * Lượt 3: 17 (lẻ) → 17 + 2*17+1 = 52 đồng
 * Lượt 4: 52 (chẵn) → 52/2 = 26 đồng
 * Tối ưu: Dừng ở lượt 3 với 52 đồng
 */
function maxcoin(n) {
    // Ghi nhớ để tránh tính toán lại các trạng thái đã tính
    const memo = new Map();

    /**
     * Hàm đệ quy hỗ trợ để tìm số tiền tối đa từ trạng thái hiện tại
     * @param {number} coins - Số tiền hiện tại
     * @returns {number} Số tiền tối đa có thể đạt được từ trạng thái này
     */
    function findMax(coins) {
        // Điều kiện dừng: nếu chỉ còn 1 đồng, trò chơi phải kết thúc
        if (coins === 1) {
            return 1;
        }

        // Kiểm tra xem đã tính toán trạng thái này chưa
        if (memo.has(coins)) {
            return memo.get(coins);
        }

        let maxFromHere = coins; // Lựa chọn 1: Dừng ngay và giữ số tiền hiện tại

        // Lựa chọn 2: Tiếp tục chơi
        let nextCoins;
        if (coins % 2 === 0) {
            // Chẵn: phải đưa một nửa
            nextCoins = coins / 2;
        } else {
            // Lẻ: nhận thêm 2*coins+1 đồng
            nextCoins = 3 * coins + 1;
        }

        // Đệ quy tìm số tiền tối đa từ trạng thái tiếp theo
        const maxFromContinuing = findMax(nextCoins);

        // Chọn lựa chọn tốt hơn: dừng ngay hoặc tiếp tục chơi
        maxFromHere = Math.max(maxFromHere, maxFromContinuing);

        // Lưu kết quả vào bộ nhớ
        memo.set(coins, maxFromHere);

        return maxFromHere;
    }

    return findMax(n);
}

// Kiểm tra với ví dụ đã cho
console.log("Kiểm tra hàm maxcoin:");
console.log(`maxcoin(11) = ${maxcoin(11)}`); // Kết quả mong đợi: 52

// Các test case bổ sung
console.log(`maxcoin(1) = ${maxcoin(1)}`); // Kết quả mong đợi: 1 (trường hợp cơ sở)
console.log(`maxcoin(2) = ${maxcoin(2)}`); // Kết quả mong đợi: 2 (dừng ngay)
console.log(`maxcoin(3) = ${maxcoin(3)}`); // Kết quả mong đợi: 16 (3→10→5→16→8→4→2→1, dừng tại 16)
console.log(`maxcoin(4) = ${maxcoin(4)}`); // Kết quả mong đợi: 4 (dừng ngay)
console.log(`maxcoin(5) = ${maxcoin(5)}`); // Kết quả mong đợi: 16 (5→16→8→4→2→1, dừng tại 16)
