/**
 * BÀI TOÁN: COUNT UNLOCKING ENTRIES - ĐẾM SỐ LẦN THỬ KHÓA
 *
 * Mô tả:
 * - Có n phòng, k chìa khóa (k ≥ n)
 * - Mỗi phòng có đúng 1 chìa khóa trong chùm
 * - Tìm số lần thử tối đa để gán nhãn tất cả chìa khóa
 *
 * Phân tích trường hợp xấu nhất:
 * - Phòng 1: Thử tối đa (k-1) lần (chìa thứ k chắc chắn đúng)
 * - Phòng 2: Thử tối đa (k-2) lần (còn k-1 chìa chưa biết)
 * - Phòng 3: Thử tối đa (k-3) lần
 * - ...
 * - Phòng n: Thử tối đa (k-n) lần
 *
 * Tổng = (k-1) + (k-2) + ... + (k-n)
 *      = Tổng cấp số cộng n số hạng
 *      = n × [(k-1) + (k-n)] / 2
 *      = n × (2k - n - 1) / 2
 *
 * Ví dụ:
 * - n=2, k=2: 2×(2×2-2-1)/2 = 2×1/2 = 1 ✓
 * - n=3, k=4: 3×(2×4-3-1)/2 = 3×4/2 = 6 ✓
 *
 * Lưu ý: k có thể lên đến 10^10 → cần dùng BigInt
 */
function countUnlockingEntries(n, k) {
    // Chuyển sang BigInt để xử lý số lớn
    const nBig = BigInt(n);
    const kBig = BigInt(k);

    // Công thức: n × (2k - n - 1) / 2
    const result = (nBig * (2n * kBig - nBig - 1n)) / 2n;

    // Trả về dạng number nếu nhỏ, BigInt nếu lớn
    return Number(result);
}

module.exports = countUnlockingEntries;
