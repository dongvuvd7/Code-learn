/**
 * BÀI TOÁN: MAX KNIGHT - SỐ QUÂN MÃ TỐI ĐA
 *
 * Mô tả:
 * - Đặt tối đa quân mã trên bàn cờ n×n
 * - Không quân mã nào tấn công được quân mã khác
 * - Mã nhảy hình chữ L (2 ô theo 1 hướng, 1 ô vuông góc)
 *
 * Phân tích:
 * - Tô bàn cờ như cờ vua (đen-trắng xen kẽ)
 * - Mã chỉ nhảy từ ô màu này sang ô màu khác
 * - Đặt tất cả mã trên cùng 1 màu → không tấn công nhau
 *
 * Số ô mỗi màu:
 * - Nếu n² chẵn: mỗi màu n²/2 ô
 * - Nếu n² lẻ: 1 màu (n²+1)/2 ô, màu kia (n²-1)/2 ô
 * - Chọn màu có nhiều ô hơn: ⌈n²/2⌉
 *
 * Công thức:
 * - n = 1: 1 (chỉ 1 ô)
 * - n = 2: 4 (đặt 4 góc - trường hợp đặc biệt)
 * - n ≥ 3: ⌈n²/2⌉
 *
 * Ví dụ:
 * - n=3: ⌈9/2⌉ = 5 ✓
 * - n=4: ⌈16/2⌉ = 8 ✓
 */
function maxKnight(n) {
    // Trường hợp đặc biệt
    if (n === 1) {
        return 1;
    }

    if (n === 2) {
        return 4;
    }

    // Với n ≥ 3: đặt quân mã trên tất cả ô cùng màu
    // Số ô màu nhiều hơn = ⌈n²/2⌉
    const total = n * n;
    return Math.ceil(total / 2);
}

module.exports = maxKnight;
