/**
 * BÀI TOÁN: PEBBLE PICKING - GAME THEORY
 *
 * Luật chơi:
 * - Có n viên sỏi
 * - Mỗi lượt nhặt từ 1 đến k viên
 * - Người nhặt viên cuối cùng thắng
 * - Cả 2 người chơi tối ưu
 *
 * Phân tích Game Theory:
 * - Losing Position: n % (k+1) == 0 → Người đi sau thắng
 * - Winning Position: n % (k+1) != 0 → Người đi trước thắng
 *
 * Giải thích:
 * - Nếu n chia hết cho (k+1), người đi trước không thể tạo chiến thuật thắng
 * - Người đi sau luôn có thể "bù" sao cho tổng 2 lượt = k+1
 * - Ví dụ: n=4, k=3
 *   + Người đi trước nhặt x (1≤x≤3)
 *   + Người đi sau nhặt (4-x), tổng = 4 = k+1
 *   + Lặp lại cho đến hết → Người đi sau nhặt viên cuối
 *
 * Ví dụ:
 * - n=4, k=3: 4%(3+1)=0 → Người đi sau thắng (2)
 * - n=5, k=3: 5%(3+1)=1≠0 → Người đi trước thắng (1)
 */
function pebblePicking(n, k) {
    // Kiểm tra vị trí thắng/thua theo Game Theory
    // Nếu n chia hết cho (k+1) → Losing Position → Người đi sau thắng
    // Ngược lại → Winning Position → Người đi trước thắng
    return n % (k + 1) === 0 ? 2 : 1;
}

module.exports = pebblePicking;
