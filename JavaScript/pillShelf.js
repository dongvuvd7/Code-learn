/**
 * BÀI TOÁN: PILL SHELF - KỆ THUỐC BỊ NGHIÊNG
 *
 * Mô tả:
 * - Kệ thuốc n×n ban đầu sắp xếp: cột phải → trái, trong cột trên → dưới
 * - Động đất làm kệ nghiêng 45°
 * - Bác sĩ sắp xếp lại (nghĩ kệ đang thẳng) rồi kê lại kệ
 * - Tìm vị trí thuốc cuối cùng
 *
 * Ví dụ n=4:
 * Ban đầu:          Nghiêng 45°:      Kê lại:
 * 13  9  5  1          1              7  4  2  1
 * 14 10  6  2         2 5            11  8  5  3
 * 15 11  7  3        3 6 9           14 12  9  6
 * 16 12  8  4       4 7 10 13        16 15 13 10
 *                    8 11 14
 *                     12 15
 *                      16
 *
 * THUẬT TOÁN:
 * 1. Tạo ma trận ban đầu (cột phải → trái)
 * 2. Đọc theo đường chéo anti-diagonal (mô phỏng nghiêng 45°)
 * 3. Sắp xếp lại vào ma trận mới theo quy tắc cột phải → trái
 */
function pillShelf(n) {
    // Tạo ma trận kết quả
    const result = Array.from({ length: n }, () => Array(n).fill(0));

    let num = 1;

    // Điền theo đường chéo từ góc trên phải xuống dưới trái
    // Bắt đầu từ cột phải nhất, đi theo đường chéo
    for (let col = n - 1; col >= 0; col--) {
        let r = 0;
        let c = col;

        while (r < n && c < n) {
            result[r][c] = num++;
            r++;
            c++;
        }
    }

    // Tiếp tục với các đường chéo bắt đầu từ cột 0, hàng 1 trở đi
    for (let row = 1; row < n; row++) {
        let r = row;
        let c = 0;

        while (r < n && c < n) {
            result[r][c] = num++;
            r++;
            c++;
        }
    }

    return result;
}
module.exports = pillShelf;
