/**
 * Tìm lượng sữa tối đa có thể vắt được từ các con dê
 *
 * Bài toán: Mỗi con dê có a[i] lít sữa. Sau khi vắt 1 con dê,
 * tất cả con dê còn lại giảm 1 lít sữa. Tìm thứ tự vắt tối ưu.
 *
 * Thuật toán tham lam:
 * 1. Sắp xếp các con dê theo thứ tự giảm dần lượng sữa
 * 2. Vắt theo thứ tự đã sắp xếp
 * 3. Mỗi con dê vắt thứ k sẽ bị giảm (k-1) lít so với ban đầu
 *
 * Công thức: Tổng sữa = Σ max(0, a[i] - vị_trí_vắt)
 *
 * Ví dụ: [2,4,1,3] → sắp xếp: [4,3,2,1]
 * - Vắt dê có 4 lít: được 4 lít
 * - Vắt dê có 3 lít (giảm 1): được 2 lít
 * - Vắt dê có 2 lít (giảm 2): được 0 lít
 * - Vắt dê có 1 lít (giảm 3): được 0 lít
 * Tổng: 4 + 2 + 0 + 0 = 6
 *
 * @param {number[]} goat - Mảng lượng sữa của các con dê
 * @returns {number} - Lượng sữa tối đa có thể vắt được
 */
function milk(goat) {
    return goat.sort((a, b) => b - a).reduce((total, milk, index) => total + Math.max(0, milk - index), 0);
}
