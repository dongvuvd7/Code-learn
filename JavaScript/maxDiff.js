/**
 * BÀI TOÁN: MAX DIFF - ĐỘ LỆCH LỚN NHẤT KHI CHIA DÃY
 *
 * Mô tả:
 * - Chia dãy n phần tử thành 2 phần: k phần tử và (n-k) phần tử
 * - Tìm độ lệch lớn nhất: |Tổng phần 1 - Tổng phần 2|
 *
 * Phân tích:
 * - Gọi S1 = tổng k phần tử, S2 = tổng (n-k) phần tử
 * - Total = S1 + S2
 * - Độ lệch = |S1 - S2| = |2×S1 - Total|
 *
 * Để max độ lệch:
 * - Case 1: Chọn k số NHỎ NHẤT → S1 min → S2 max → độ lệch lớn
 * - Case 2: Chọn k số LỚN NHẤT → S1 max → S2 min → độ lệch lớn
 *
 * Ví dụ:
 * n=5, k=2, a=[8,4,5,2,10]
 * - Sắp xếp: [2,4,5,8,10], Total=29
 * - Case 1: [2,4] vs [5,8,10] → |6-23| = 17 ✓
 * - Case 2: [8,10] vs [2,4,5] → |18-11| = 7
 * - Max = 17
 *
 * CÁCH GIẢI:
 * 1. Sắp xếp mảng
 * 2. Tính tổng k số nhỏ nhất và k số lớn nhất
 * 3. Tính độ lệch cho cả 2 trường hợp
 * 4. Trả về độ lệch lớn nhất
 */
function maxDiff(n, k, a) {
    // Tính tổng toàn bộ dãy
    let total = 0;
    for (let i = 0; i < n; i++) {
        total += a[i];
    }

    // Sắp xếp mảng
    a.sort((x, y) => x - y);

    // Case 1: Chọn k số nhỏ nhất
    let sumMin = 0;
    for (let i = 0; i < k; i++) {
        sumMin += a[i];
    }
    const diff1 = Math.abs(sumMin - (total - sumMin));

    // Case 2: Chọn k số lớn nhất
    let sumMax = 0;
    for (let i = n - k; i < n; i++) {
        sumMax += a[i];
    }
    const diff2 = Math.abs(sumMax - (total - sumMax));

    // Trả về độ lệch lớn nhất
    return Math.max(diff1, diff2);
}

module.exports = maxDiff;
