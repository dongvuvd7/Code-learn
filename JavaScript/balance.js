/**
 * BÀI TOÁN: BALANCE - CÂN BẰNG BẬP BÊNH VỚI 4 NGƯỜI
 *
 * Mô tả: Với mảng arr chứa trọng lượng 4 người, kiểm tra có thể chia thành 2 nhóm (không nhất thiết bằng số lượng người)
 *        sao cho tổng trọng lượng hai nhóm bằng nhau không. Nếu có, trả tổng mỗi bên; không thì -1.
 *
 * Ví dụ:
 * - arr = [1,2,3,4] → Có thể 1+4=5 và 2+3=5 → trả 5
 * - arr = [1,2,3,6] → Có thể 6=6 và 1+2+3=6 → trả 6
 *
 * HƯỚNG GIẢI (CẢI TIẾN):
 * - Tính tổng S. Nếu S lẻ → -1 (không thể chia đôi).
 * - Target = S/2. Với n=4, brute force tất cả subset (2^4=16) để tìm subset có tổng == target (không rỗng và không full).
 * - Nếu tìm thấy, trả target; không thì -1.
 * - Thời gian O(1) vì n nhỏ.
 */
function balance(arr) {
    const total = arr.reduce((a, b) => a + b, 0);
    if (total % 2 !== 0) return -1;
    const target = total / 2;

    // Brute force tất cả subset (sử dụng bit mask)
    for (let mask = 1; mask < (1 << arr.length) - 1; mask++) {
        // Từ 1 đến 2^n - 2 (loại subset rỗng và full)
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            if (mask & (1 << i)) {
                sum += arr[i];
            }
        }
        if (sum === target) {
            return target;
        }
    }

    return -1;
}
