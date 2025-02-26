/**
 * Kiểm tra xem chuỗi s có đúng là chuỗi chỉ gồm ký tự số có 4 hoặc 6 ký tự không
 * @param {string} s - Chuỗi cần kiểm tra
 * @returns {boolean} - Trả về true nếu chuỗi hợp lệ, ngược lại trả về false
 */
function validatePinCode(s) {
    const regex = /^(\d{4}|\d{6})$/;
    return regex.test(s);
}