/**
 * Tính toán biểu thức đơn giản với các số lớn
 * @param {string} s - Biểu thức cần tính toán
 * @returns {string} - Kết quả của phép toán hoặc "Math error" nếu có lỗi
 */
function calculate(s) {
    let arr = s.split(' ');

    // Kiểm tra điều kiện đầu vào
    if (arr.length !== 3 || s.length < 5 || s.length > 20 || isNaN(arr[0]) || isNaN(arr[2])) {
        return "Math error";
    }

    // Chuyển đổi các số thành BigInt
    let num1 = BigInt(arr[0]);
    let num2 = BigInt(arr[2]);

    // Thực hiện phép toán dựa trên toán tử
    switch (arr[1]) {
        case '+':
            return (num1 + num2).toString();
        case '-':
            return (num1 - num2).toString();
        case '*':
            return (num1 * num2).toString();
        case '/':
            return num2 === 0n ? "Math error" : (num1 / num2).toString();
        case '%':
            return num2 === 0n ? "Math error" : (num1 % num2).toString();
        default:
            return "Math error";
    }
}