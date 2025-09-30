/**
 * BÀI TOÁN: ENCODE FUNCTION - GIẢI MÃ SỐ
 *
 * Mô tả: Rôn mã hóa số x thành y bằng cách: y = x + tổng_các_chữ_số_của_x
 * Yêu cầu: Cho y, tìm x nhỏ nhất sao cho x + tổng_các_chữ_số_của_x = y
 *
 * Ví dụ: y = 15 → x = 12 (vì 12 + 1 + 2 = 15)
 *
 * CÁCH GIẢI:
 * 1. Ước lượng khoảng tìm kiếm:
 *    - Vì x + tổng_chữ_số(x) = y → x = y - tổng_chữ_số(x)
 *    - Tổng chữ số tối đa của số n chữ số là 9×n
 *    - Với y ≤ 10^9 (9 chữ số) → tổng chữ số tối đa = 9×9 = 81
 *    - Vậy x ≥ y - 81
 *
 * 2. Duyệt từ max(1, y-81) đến y-1, tìm x đầu tiên thỏa mãn
 *
 * Độ phức tạp: O(81) = O(1) - rất hiệu quả
 */
function encodefunc(y) {
    // Hàm tính tổng các chữ số của một số
    function sumOfDigits(num) {
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        return sum;
    }

    // Vì x + sumOfDigits(x) = y
    // Nên x = y - sumOfDigits(x)
    // Ta có thể ước lượng x sẽ nhỏ hơn y

    // Giới hạn tìm kiếm: số có n chữ số có tổng chữ số tối đa là 9*n
    // Với y <= 10^9, ta có tối đa 9 chữ số, tổng chữ số tối đa là 9*9 = 81
    // Vậy x >= y - 81
    let start = Math.max(1, y - 81);

    // Duyệt từ start đến y để tìm x nhỏ nhất
    for (let x = start; x < y; x++) {
        if (x + sumOfDigits(x) === y) {
            return x;
        }
    }

    // Trường hợp đặc biệt: nếu không tìm thấy trong khoảng trên
    // (theo đề bài thì luôn tồn tại kết quả)
    return -1;
}

// Test với ví dụ
console.log("Test case: encodefunc(15) =", encodefunc(15)); // Kết quả mong đợi: 12

// Thêm một số test case khác
console.log("Test case: encodefunc(21) =", encodefunc(21)); // 21 = 18 + 1 + 8 = 18 + 9
console.log("Test case: encodefunc(100) =", encodefunc(100));

// Kiểm tra lại bằng cách mã hóa ngược
function encode(x) {
    let sum = 0;
    let temp = x;
    while (temp > 0) {
        sum += temp % 10;
        temp = Math.floor(temp / 10);
    }
    return x + sum;
}

console.log("Kiểm tra: encode(12) =", encode(12)); // Phải bằng 15
console.log("Kiểm tra: encode(18) =", encode(18)); // Phải bằng 27

// Export function
module.exports = encodefunc;
