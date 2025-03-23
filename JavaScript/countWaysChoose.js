/**
 * Cho 3 mảng a, b, c độ dài bằng nhau
 * Tìm số cách chọn bộ 3 (i, j, k) sao cho a[i] = b[j] = c[k]
 */
function countWaysChoose(a, b, c) {
    let n = a.length;
    let count = 0;

    // Sử dụng Map để lưu trữ số lần xuất hiện của các giá trị trong mảng a và b
    let mapA = new Map();
    let mapB = new Map();

    for (let i = 0; i < n; i++) {
        mapA.set(a[i], (mapA.get(a[i]) || 0) + 1);
        mapB.set(b[i], (mapB.get(b[i]) || 0) + 1);
    }

    // Duyệt qua mảng c và tính số cách chọn bộ 3 (i, j, k)
    for (let i = 0; i < n; i++) {
        if (mapA.has(c[i]) && mapB.has(c[i])) {
            count += mapA.get(c[i]) * mapB.get(c[i]);
        }
    }

    return count;
}