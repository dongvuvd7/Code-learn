/**
 * @param {*} a : chiều dài
 * @param {*} b : chiều rộng đáy
 * @param {*} c : chiều cao
 * Tính diện tích toàn phần của hình hộp chữ nhật, nếu không tính được thì trả về -1
 */
function cuboidArea(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) return -1;
    // Tính diện tích toàn phần của hình hộp chữ nhật
    let area = (a + b) * 2 * c + 2 * a * b;
    // Làm tròn đến 2 chữ số thập phân
    return parseFloat(area.toFixed(2));
}