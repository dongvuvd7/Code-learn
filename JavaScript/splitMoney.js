/**
 * BÀI TOÁN: SPLIT MONEY - CHIA TIỀN VÀO TÚI VỚI MỆNH GIÁ KHÁC NHAU
 *
 * Mô tả: Chia các tờ tiền (mảng arr) vào các túi sao cho mỗi túi có mệnh giá khác nhau (không trùng lặp).
 *        Tìm số túi tối thiểu.
 *
 * Ví dụ: arr = [1,2,4,3,3,2] → freq: 1:1, 2:2, 3:2, 4:1 → max freq=2 → trả 2
 *
 * HƯỚNG GIẢI:
 * - Đếm tần suất (frequency) của mỗi mệnh giá.
 * - Số túi min = max frequency (vì các tờ cùng mệnh giá không thể cùng túi, và các mệnh khác có thể gộp).
 * - Thời gian O(n), n<=1e5, hiệu quả.
 */
function splitMoney(arr) {
    if (arr.length === 0) return 0;

    const freq = new Map();
    for (let val of arr) {
        freq.set(val, (freq.get(val) || 0) + 1);
    }

    let maxFreq = 0;
    for (let f of freq.values()) {
        if (f > maxFreq) maxFreq = f;
    }

    return maxFreq;
}
