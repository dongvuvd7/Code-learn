/**
 * Kiểm tra xem một số có phải là self-dividing hay không.
 * Một số là self-dividing nếu nó chia hết cho mọi chữ số nó chứa (trừ 0).
 * Số self-dividing không được chứa chữ số 0.
 *
 * @param {number} num Số cần kiểm tra.
 * @returns {boolean} True nếu là self-dividing, False nếu không.
 */
function isSelfDividing(num) {
    // Số 0 không phải là self-dividing.
    // Các số < 10 và khác 0 luôn là self-dividing.
    if (num === 0) {
        return false;
    }

    let originalNum = num; // Lưu lại số ban đầu để kiểm tra chia hết
    let tempNum = num;     // Biến tạm để lấy từng chữ số

    while (tempNum > 0) {
        const digit = tempNum % 10; // Lấy chữ số cuối cùng (hàng đơn vị)

        // Điều kiện 1: Chữ số phải khác 0
        if (digit === 0) {
            return false;
        }

        // Điều kiện 2: Số ban đầu phải chia hết cho chữ số này
        if (originalNum % digit !== 0) {
            return false;
        }

        // Loại bỏ chữ số cuối cùng để xét chữ số tiếp theo
        tempNum = Math.floor(tempNum / 10);
    }

    // Nếu vượt qua tất cả các kiểm tra cho mọi chữ số
    return true;
}

/**
 * Trả về danh sách các số self-dividing trong khoảng [l, r].
 *
 * @param {number} l Giới hạn dưới của khoảng (bao gồm).
 * @param {number} r Giới hạn trên của khoảng (bao gồm).
 * @returns {number[]} Mảng các số self-dividing.
 */
function selfDividingNumber(l, r) {
    const result = [];
    for (let i = l; i <= r; i++) {
        if (isSelfDividing(i)) {
            result.push(i);
        }
    }
    return result;
}

// Ví dụ sử dụng:
console.log(`Các số self-dividing trong khoảng [1, 22]:`, selfDividingNumber(1, 22));
// Kết quả mong đợi: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]

console.log(`Các số self-dividing trong khoảng [47, 85]:`, selfDividingNumber(47, 85));
// Kết quả mong đợi: [48, 55, 66, 77]

console.log(`Các số self-dividing trong khoảng [0, 10]:`, selfDividingNumber(0, 10));
// Kết quả mong đợi: [1, 2, 3, 4, 5, 6, 7, 8, 9]