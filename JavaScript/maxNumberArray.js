/**
 * Tìm giá trị lớn nhất chưa xuất hiện trong mảng và nhỏ hơn giá trị max
 *
 * Bài toán: Cho mảng a, tìm số lớn nhất x sao cho:
 * 1. x không có trong mảng a
 * 2. x < max(a)
 *
 * Thuật toán:
 * 1. Tìm giá trị max trong mảng
 * 2. Tạo Set để lưu các giá trị đã xuất hiện
 * 3. Duyệt ngược từ (max-1) về -∞ để tìm số đầu tiên chưa xuất hiện
 *
 * Ví dụ:
 * - [1,2,4]: max=4, duyệt 3,2,1 → 3 chưa có → return 3
 * - [19,18,4,6]: max=19, duyệt 18,17,16,... → 17 chưa có → return 17
 *
 * @param {number[]} a - Mảng số nguyên
 * @returns {number} - Số lớn nhất chưa xuất hiện và nhỏ hơn max
 */
function maxNumberArray(a) {
    // Tìm giá trị lớn nhất trong mảng
    const max = Math.max(...a);

    // Tạo Set để kiểm tra sự xuất hiện nhanh O(1)
    const existingNumbers = new Set(a);

    // Duyệt ngược từ (max-1) để tìm số lớn nhất chưa xuất hiện
    for (let i = max - 1; i >= Number.MIN_SAFE_INTEGER; i--) {
        if (!existingNumbers.has(i)) {
            return i;
        }
    }

    // Không bao giờ đến đây trong trường hợp thực tế
    return Number.MIN_SAFE_INTEGER;
}
