/**
 * Tính tổng điểm trong trò chơi bóng chày với các thao tác đặc biệt
 *
 * Bài toán: Xử lý dãy các thao tác để tính điểm cuối cùng:
 * - Số nguyên: Điểm của vòng đó
 * - "+": Tổng điểm 2 vòng gần nhất
 * - "D": Gấp đôi điểm vòng trước
 * - "C": Hủy điểm vòng trước (xóa khỏi lịch sử)
 *
 * Thuật toán:
 * 1. Sử dụng stack để lưu điểm các vòng hợp lệ
 * 2. Xử lý từng thao tác theo quy tắc
 * 3. Tính tổng tất cả điểm trong stack
 *
 * Ví dụ: ["5","2","C","D","+"]
 * - "5": stack = [5], tổng = 5
 * - "2": stack = [5,2], tổng = 7
 * - "C": stack = [5], tổng = 5 (xóa vòng 2)
 * - "D": stack = [5,10], tổng = 15 (5*2=10)
 * - "+": stack = [5,10,15], tổng = 30 (5+10=15)
 *
 * @param {string[]} operations - Dãy các thao tác (0 ≤ length ≤ 10^4)
 * @returns {number} - Tổng điểm cuối cùng
 */
function baseballGame(operations) {
    // Stack để lưu điểm các vòng hợp lệ
    const scores = [];

    // Xử lý từng thao tác
    for (let operation of operations) {
        if (operation === "+") {
            // Tính tổng 2 vòng gần nhất
            const len = scores.length;
            const newScore = scores[len - 1] + scores[len - 2];
            scores.push(newScore);
        } else if (operation === "D") {
            // Gấp đôi điểm vòng trước
            const len = scores.length;
            const newScore = scores[len - 1] * 2;
            scores.push(newScore);
        } else if (operation === "C") {
            // Hủy điểm vòng trước (xóa khỏi stack)
            scores.pop();
        } else {
            // Số nguyên: thêm điểm vào stack
            scores.push(parseInt(operation));
        }
    }

    // Tính tổng tất cả điểm trong stack
    return scores.reduce((sum, score) => sum + score, 0);
}

// Test với ví dụ từ đề bài
console.log(baseballGame(["5", "2", "C", "D", "+"])); // Kết quả mong đợi: 30

// Test thêm các trường hợp khác
console.log(baseballGame(["5", "-2", "4", "C", "D", "9", "+", "+"])); // 27
console.log(baseballGame(["1"])); // 1
console.log(baseballGame(["1", "C"])); // 0
