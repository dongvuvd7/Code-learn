/**
 * BÀI TOÁN: AGE OF TREE - TUỔI CỦA CÂY
 *
 * Mô tả:
 * - Đếm tuổi cây qua số vòng gỗ (mặt cắt ngang)
 * - Mỗi dòng đại diện cho 1 chu kỳ tăng trưởng:
 *   + '0': tăng trưởng nhanh
 *   + '1': tăng trưởng chậm
 * - Tuổi = số lần chuyển đổi giữa các chu kỳ
 *
 * Xử lý nhiễu:
 * - Có thể có ký tự lỗi hoặc ký tự không hợp lệ
 * - Lỗi luôn ít hơn ký tự hợp lệ
 * - Dùng Majority Vote: đếm '0' và '1', số nào nhiều hơn là chu kỳ
 *
 * Ví dụ:
 * crossSection = [
 *   "0000001000",  // 9 số '0' vs 1 số '1' → '0'
 *   "1111111111",  // 0 số '0' vs 10 số '1' → '1' (+1 chuyển đổi)
 *   "111111?111",  // 0 số '0' vs 9 số '1' → '1' (không đổi)
 *   "0000000000"   // 10 số '0' vs 0 số '1' → '0' (+1 chuyển đổi)
 * ]
 * → Kết quả: 2
 *
 * CÁCH GIẢI:
 * 1. Với mỗi dòng, đếm số lượng '0' và '1'
 * 2. Xác định chu kỳ chính (majority vote)
 * 3. Đếm số lần thay đổi chu kỳ giữa các dòng liên tiếp
 */
function ageOfTree(crossSection) {
    if (!crossSection || crossSection.length === 0) {
        return 0;
    }

    // Hàm xác định chu kỳ chính của một dòng (majority vote)
    function getCycle(line) {
        let count0 = 0;
        let count1 = 0;

        for (let char of line) {
            if (char === "0") count0++;
            else if (char === "1") count1++;
        }

        // Trả về ký tự có số lượng nhiều hơn
        return count0 > count1 ? "0" : "1";
    }

    // Xác định chu kỳ của dòng đầu tiên
    let previousCycle = getCycle(crossSection[0]);
    let transitions = 0;

    // Duyệt qua các dòng còn lại
    for (let i = 1; i < crossSection.length; i++) {
        const currentCycle = getCycle(crossSection[i]);

        // Nếu chu kỳ thay đổi, tăng số lần chuyển đổi
        if (currentCycle !== previousCycle) {
            transitions++;
            previousCycle = currentCycle;
        }
    }

    return transitions;
}

module.exports = ageOfTree;
