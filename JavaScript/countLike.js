/**
 * BÀI TOÁN: COUNT LIKE - ĐẾM SỐ NÚT ĐANG BẬT
 *
 * Yêu cầu:
 * - Ban đầu tất cả nút đều tắt
 * - Mỗi lần nhấn: tắt → bật, bật → tắt (toggle)
 * - Đếm số nút đang bật sau khi nhấn theo arr
 *
 * Ví dụ:
 * arr = [1, 1, 2, 1, 2]
 * - Nhấn 1: {1 bật}
 * - Nhấn 1: {1 tắt}
 * - Nhấn 2: {2 bật}
 * - Nhấn 1: {1 bật, 2 bật}
 * - Nhấn 2: {1 bật, 2 tắt}
 * → Kết quả = 1
 *
 * NHẬN XÉT:
 * - Nút nhấn số lẻ lần → bật
 * - Nút nhấn số chẵn lần → tắt
 *
 * CÁCH GIẢI:
 * Dùng Set để toggle:
 * - Nếu nút chưa có trong Set → thêm vào (bật)
 * - Nếu nút đã có trong Set → xóa đi (tắt)
 * - Trả về Set.size
 *
 * Độ phức tạp: O(n)
 */
function countLike(arr) {
    const activeButtons = new Set();

    for (const button of arr) {
        if (activeButtons.has(button)) {
            // Nút đang bật → tắt đi
            activeButtons.delete(button);
        } else {
            // Nút đang tắt → bật lên
            activeButtons.add(button);
        }
    }

    return activeButtons.size;
}

module.exports = countLike;
