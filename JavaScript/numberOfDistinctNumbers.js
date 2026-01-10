/**
 * BÀI TOÁN: NUMBER OF DISTINCT NUMBERS - SỐ PHẦN TỬ PHÂN BIỆT
 *
 * Yêu cầu:
 * - Với mỗi b[i], đếm số phần tử phân biệt trong a từ vị trí b[i] đến cuối
 * - Vị trí tính từ 1 (không phải 0)
 *
 * Ví dụ:
 * a = [8, 4, 4, 3, 4, 2, 4, 8]
 *      1  2  3  4  5  6  7  8  (vị trí)
 * b = [6, 4, 2]
 *
 * - b[0]=6: từ vị trí 6→8: [2,4,8] → 3 số
 * - b[1]=4: từ vị trí 4→8: [3,4,2,4,8] → {3,4,2,8} → 4 số
 * - b[2]=2: từ vị trí 2→8: [4,4,3,4,2,4,8] → {4,3,2,8} → 5 số (chú ý: 8 ở đầu và cuối)
 *
 * CÁCH GIẢI (Preprocessing):
 * 1. Duyệt ngược từ cuối mảng a
 * 2. Tại mỗi vị trí i, tính số phần tử phân biệt từ i đến cuối
 * 3. Với mỗi b[j], tra cứu kết quả đã tính
 *
 * Độ phức tạp: O(|a| + |b|)
 */
function numberOfDistinctNumbers(a, b) {
    const n = a.length;

    // Mảng lưu số phần tử phân biệt từ vị trí i đến cuối
    // distinctCount[i] = số phần tử phân biệt từ index i đến n-1
    const distinctCount = new Array(n);

    // Set để theo dõi các phần tử đã gặp
    const seen = new Set();

    // Duyệt ngược từ cuối mảng
    for (let i = n - 1; i >= 0; i--) {
        seen.add(a[i]);
        distinctCount[i] = seen.size;
    }

    // Tạo kết quả cho từng b[j]
    const result = [];

    for (let j = 0; j < b.length; j++) {
        const position = b[j]; // Vị trí tính từ 1
        const index = position - 1; // Chuyển sang index (tính từ 0)

        // Kiểm tra vị trí hợp lệ
        if (index >= 0 && index < n) {
            result.push(distinctCount[index]);
        } else {
            result.push(0); // Vị trí không hợp lệ
        }
    }

    return result;
}

module.exports = numberOfDistinctNumbers;
