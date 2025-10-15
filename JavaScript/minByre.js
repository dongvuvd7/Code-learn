/**
 * BÀI TOÁN: MIN BYRE - TÌM SỐ CHUỒNG NHỎ NHẤT ĐỂ TÌM BÒ
 *
 * Phân tích lại dựa trên ví dụ cụ thể:
 *
 * Ví dụ 1: n=6, x=2 → result=1
 * Cấu trúc: [Cửa chính] [Rỗng] [Bò1] [Bò2] [Bò3] [Bò4] [Bò5] [Bò6] [Cửa sau]
 * - Từ cửa chính: qua 1 chuồng (rỗng) → đến bò 2
 * - Từ cửa sau: qua 4 chuồng (bò6→bò5→bò4→bò3) → đến bò 2
 * → min(1, 4) = 1 ✓
 *
 * Ví dụ 2: n=5, x=4 → result=0
 * Cấu trúc: [Cửa chính] [Rỗng] [Bò1] [Bò2] [Bò3] [Bò4] [Bò5] [Cửa sau]
 * - Từ cửa chính: qua 3 chuồng (rỗng→bò1→bò2→bò3) → đến bò 4
 * - Từ cửa sau: qua 0 chuồng → bò 4 ngay cạnh bò 5, gần cửa sau
 *
 * Wait! Có thể hiểu sai. Nếu "qua 0 chuồng" có nghĩa là không cần đi qua chuồng nào khác?
 * Có thể bò 4 và bò 5 ở cùng một khu vực gần cửa sau?
 *
 * Thử hiểu khác: "qua chuồng" = đi qua các vách ngăn
 * - Từ cửa sau đến bò 4: chỉ cần qua 1 vách (giữa bò 5 và bò 4)? → 1 ≠ 0
 *
 * Có thể là: min(x-1, n-x) nhưng có điều kiện đặc biệt
 * Hoặc có thể cấu trúc khác: bò được sắp xếp theo cách khác?
 *
 * Thử công thức đơn giản: min(x-1, n-x) và xem có đúng không
 */
function minByre(n, x) {
    let b = Math.ceil((x + 1) / 2);
    let t = Math.ceil((n + 1) / 2);
    return Math.min(b - 1, t - b);
}

module.exports = minByre;
